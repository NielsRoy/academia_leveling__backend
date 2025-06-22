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
    ) {}


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
        console.log('BKT Model Response:', response.data);
        return response.data;
    }
}