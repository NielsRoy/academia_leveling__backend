import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentAchiev } from '../entities/student_achiev.entity';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentAchievService {

  constructor(
    @InjectRepository(StudentAchiev)
    private readonly studentAchievRepository: Repository<StudentAchiev>,
  ) {}

  async findAll(student: Student) {
    return await this.studentAchievRepository.findBy({ student });
  }
}
