import { Injectable, Logger } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from '../entities/teacher.entity';
import { CreateTeacherInput } from '../dto/teacher/create-teacher.input';
import { User } from '../../users/entities/user.entity';
import { UpdateTeacherInput } from '../dto/teacher/update-teacher.input';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';

@Injectable()
export class TeachersService {

  private logger = new Logger('TeachersService');

  constructor(

    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>,
  
  ) {}

  async create(user: User, createTeacherInput: CreateTeacherInput, queryRunner: QueryRunner): Promise<Teacher> {
    const newTeacher = this.teachersRepository.create({ id: user.id, ...createTeacherInput, user }); 
    return await queryRunner.manager.save(newTeacher);
  }

  findAll() {
    return `This action returns all teachers`;
  }

  async findOneByUser(user: User): Promise<Teacher> {
    try {
      return await this.teachersRepository.findOneByOrFail({ user: { id: user.id } });
    } catch(error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  } 

  update(id: number, updateTeacherInput: UpdateTeacherInput) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
