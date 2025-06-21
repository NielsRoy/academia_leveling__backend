import { Injectable, Logger } from '@nestjs/common';
import { CreateStudentInput } from '../dto/create-student.input';
import { UpdateStudentInput } from '../dto/update-student.input';
import { Student } from '../entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Classroom } from '../../teachers/entities/classroom.entity';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';
import { UsersService } from '../../users/users.service';
import { StudentDoExercise } from '../entities/student_do_exercise.entity';
import { StudentDoExerciseInput } from '../dto/student-do-exercise.input';

@Injectable()
export class StudentsService {

  private logger = new Logger('StudentsService');

  constructor(

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    private readonly usersService: UsersService,

    private readonly dataSource: DataSource,

    @InjectRepository(StudentDoExercise)
    private readonly stDoExRepository: Repository<StudentDoExercise>,
  ) {}

  async create(user: User, queryRunner: QueryRunner, createStudentInput: CreateStudentInput = {}): Promise<Student> {
    const newStudent = this.studentsRepository.create({ id: user.id, ...createStudentInput, user });
    return await queryRunner.manager.save(newStudent);
  }

  async findAllByClassroom(classroom: Classroom): Promise<Student[]> {
    return await this.studentsRepository.findBy({ classroom: { id: classroom.id } });
  }

  async findOneByUser(user: User): Promise<Student> {
    try {
      return await this.studentsRepository.findOneByOrFail({ user: { id: user.id } }); //? Este metodo al aparecer si le paso todo el objeto compara por el objeto que se parezca mas en todos sus campos, no por el id del objeto
    } catch(error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  } 

  async updateByUser(user: User, updateStudentInput: UpdateStudentInput): Promise<Student> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const { classroomId, level, xp, ...userData } = updateStudentInput;
      const updatedUser = await this.usersService.update(user.id, userData, queryRunner);
      const fieldsToUpdate: any = { level, xp };
      if (classroomId) fieldsToUpdate.classroom = { id: classroomId };
      await this.studentsRepository.createQueryBuilder().setQueryRunner(queryRunner)
        .update().set(fieldsToUpdate).where('user_id = :id', { id: user.id })
        .execute();
      await queryRunner.commitTransaction();
      return await this.findOneByUser(updatedUser);
    } catch(error) {
      await queryRunner.rollbackTransaction();
      ErrorHandlerUtil.handle(error, this.logger);
    } finally {
      await queryRunner.release();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }

  async setStudentDoExercise(user: User, studentDoExerciseInput: StudentDoExerciseInput): Promise<StudentDoExercise> {
    const student = await this.findOneByUser(user);
    const { exercise_id, ...rest } = studentDoExerciseInput;
    const newStudentDoExercise = this.stDoExRepository.create({
      ...rest,
      exercise: { id: exercise_id },
      student: { id: student.id },
    });
    return await this.stDoExRepository.save(newStudentDoExercise);
  }
}
