import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from '../entities/classroom.entity';
import { CreateClassroomInput } from '../dto/classroom/create-classroom.input';
import { Teacher } from '../entities/teacher.entity';
import { UpdateClassroomInput } from '../dto/classroom/update-classroom.input';
import { User } from '../../users/entities/user.entity';
import { TeachersService } from './teachers.service';

@Injectable()
export class ClassroomsService {

  constructor(

    @InjectRepository(Classroom)
    private readonly classroomsRepository: Repository<Classroom>,

    private readonly teachersService: TeachersService,

  ) {}

  async create(createClassroomInput: CreateClassroomInput, user: User): Promise<Classroom> {
    const teacher = await this.teachersService.findOneByUser(user);
    const newClassroom = this.classroomsRepository.create({
      ...createClassroomInput,
      teacher,
    });
    return await this.classroomsRepository.save(newClassroom);
  }

  async findAll(teacher: Teacher): Promise<Classroom[]> {
    return this.classroomsRepository.findBy({ teacher });
  }

  findOne(id: number) {
    return `This action returns a #${id} classroom`;
  }

  update(id: number, updateClassroomInput: UpdateClassroomInput) {
    return `This action updates a #${id} classroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
