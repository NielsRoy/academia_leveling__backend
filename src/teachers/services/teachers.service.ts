import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from '../entities/teacher.entity';
import { CreateTeacherInput } from '../dto/teacher/create-teacher.input';
import { User } from '../../users/entities/user.entity';
import { UpdateTeacherInput } from '../dto/teacher/update-teacher.input';

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

  async findOneByUser(user: User): Promise<Teacher> {
    //return await this.teachersRepository.findOneByOrFail({ user }); //todo: investigar para control de excepciones centralizado
    const teacher = await this.teachersRepository.findOneBy({ user });
    if (!teacher) throw new NotFoundException(`Teacher with userId ${user.id} not found.`);
    return teacher;
  } 

  update(id: number, updateTeacherInput: UpdateTeacherInput) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
