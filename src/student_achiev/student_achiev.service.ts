import { Injectable } from '@nestjs/common';
import { CreateStudentAchievInput } from './dto/create-student_achiev.input';
import { UpdateStudentAchievInput } from './dto/update-student_achiev.input';
import { Student } from '../students/entities/student.entity';
import { Repository } from 'typeorm';
import { StudentAchiev } from './entities/student_achiev.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentAchievService {

  constructor(
    @InjectRepository(StudentAchiev)
    private readonly studentAchievRepository: Repository<StudentAchiev> 
  ) {}
  
  create(createStudentAchievInput: CreateStudentAchievInput) {
    return 'This action adds a new studentAchiev';
  }

  async findAll(student: Student) {
    return await this.studentAchievRepository.findBy({ student });
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAchiev`;
  }

  update(id: number, updateStudentAchievInput: UpdateStudentAchievInput) {
    return `This action updates a #${id} studentAchiev`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAchiev`;
  }
}
