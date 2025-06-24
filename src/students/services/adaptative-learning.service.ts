import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentDoExercise } from "../entities/student_do_exercise.entity";
import { QueryRunner, Repository } from "typeorm";
import { UpdateStudentKnowledgeDto } from "../dto/update-student-knowledge.dto";
import { Knowledge } from "../entities/knowledge.entity";
import { HttpService } from '@nestjs/axios';
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { ErrorHandlerUtil } from "../../common/utils/error-handler.util";
import { Exercise } from "../../courses/entities/exercise.entity";
import { Student } from "../entities/student.entity";
import { ExercisesService } from "../../courses/services/exercises.service";
import { Topic } from "../../courses/entities/topic.entity";

interface BKTInput {
    topic_id: number; 
    correct: 0 | 1;
    PL: number; 
}

interface BKTResponse {
    prediccion: number;
    topic_id: number;
    status: string;
}

@Injectable()
export class AdaptativeLearningService {

    private logger = new Logger('AdaptativeLearningService');

    constructor(
        @InjectRepository(StudentDoExercise)
        private readonly stDoExRepository: Repository<StudentDoExercise>,

        @InjectRepository(Knowledge)
        private readonly knowledgeRepository: Repository<Knowledge>,

        private readonly httpService: HttpService,

        private readonly configService: ConfigService,

        private readonly exercisesService: ExercisesService,
    ) {}

    async getAdaptativeExercises(student: Student): Promise<Exercise[]> {
        const knowledges = await this.knowledgeRepository.find({
            where: {student: { id: student.id } },
            relations: ['topic'],
        });
        console.log('Student Knowledges:', knowledges);
        const adaptativeExercises: Exercise[] = [];
        for (const knowledge of knowledges) {
            const { topic, PL } = knowledge;
            const severity = PL >= 0.95 ? 'hard' : (PL >= 0.60 && PL < 0.95)  ? 'medium' : 'easy';
            const exercises = await this.exercisesService.findAllBySeverityAndTopic(severity, topic.id);
            const randomExercises = this.getRandomAdaptativeExercises(exercises, 10);
            //adaptativeExercises.push(...exercises);
            adaptativeExercises.push(...randomExercises);
        }
        return adaptativeExercises;
    }

    async getAdaptativeExercisesByTopic(student: Student, topic: Topic): Promise<Exercise[]> {
        try {
            const topicKnowledge = await this.knowledgeRepository.findOneOrFail({
                where: {
                    student: { id: student.id },
                    topic: { id: topic.id },
                },
            });
            const { PL } = topicKnowledge;
            const severity = PL >= 0.95 ? 'hard' : (PL >= 0.60 && PL < 0.95)  ? 'medium' : 'easy';
            const exercises = await this.exercisesService.findAllBySeverityAndTopic(severity, topic.id);
            const randomExercises = this.getRandomAdaptativeExercises(exercises, 10);
            return randomExercises;
        } catch (error) {
            ErrorHandlerUtil.handle(error, this.logger);
        }
    }

    getRandomAdaptativeExercises(exercises: Exercise[], count: number = 6): Exercise[] {
        if (exercises.length <= count) {
            return exercises;
        }
        const shuffled = exercises.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    async updateStudentKnowledge(usKnowledgeDto: UpdateStudentKnowledgeDto, queryRunner: QueryRunner) {
        try {
            const { student_id, topic_id } = usKnowledgeDto;

            const knowledge = await this.knowledgeRepository.createQueryBuilder()
                .setQueryRunner(queryRunner)
                .where("student_id = :student_id", { student_id })
                .andWhere("topic_id = :topic_id", { topic_id })
                .getOne();
            //console.log('Existing Knowledge:', knowledge);

            const bktInput: BKTInput = {
                topic_id,
                correct: usKnowledgeDto.correct,
                PL: knowledge ? knowledge.PL : 0,
            }
            //console.log('BKT Input:', bktInput);

            const bktResponse = await this.getBKTModelPrediction(bktInput);
            const newPL = bktResponse.prediccion;
            if (knowledge) {
                knowledge.PL = newPL;
                return await queryRunner.manager.save(knowledge);
            }   

            const newKnowledge = this.knowledgeRepository.create({
                student: { id: student_id},
                topic: { id: topic_id },
                PL: newPL,
            });
            return await queryRunner.manager.save(newKnowledge);
        } catch (error) {
            ErrorHandlerUtil.handle(error, this.logger);
        }
    }


    async getBKTModelPrediction(bktInput: BKTInput): Promise<BKTResponse> {
        //const url = 'http://localhost:8000/predict';
        const BKT_API = this.configService.get<string>('BKT_API');
        const url = `${BKT_API}/predict-student-knowledge`;
        const response = await firstValueFrom(this.httpService.post(url, bktInput));
        //console.log('BKT Model Response:', response.data);
        return response.data;
    }
}