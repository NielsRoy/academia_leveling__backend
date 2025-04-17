import { Injectable } from '@nestjs/common';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeachersService {

  constructor(

    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>,
  
  ) {}

  async create(createTeacherInput: CreateTeacherInput): Promise<Teacher> {
    const { userId, ...rest } = createTeacherInput;
    const newTeacher = this.teachersRepository.create({
      user: { id: userId },
      ...rest,
    });
    return await this.teachersRepository.save(newTeacher);
  }

  findAll() {
    return `This action returns all teachers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherInput: UpdateTeacherInput) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
