import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

  constructor(

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

  ) {}

  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { userId } = createStudentInput;
    const newStudent = this.studentsRepository.create({
      user: { id: userId }
    });
    return await this.studentsRepository.save(newStudent);
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
