import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { ClassroomsService } from '../teachers/services/classrooms.service';
import { Classroom } from '../teachers/entities/classroom.entity';

@Injectable()
export class StudentsService {

  constructor(

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    private readonly classroomsService: ClassroomsService,

  ) {}

  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { userId } = createStudentInput;
    const newStudent = this.studentsRepository.create({
      user: { id: userId }
    });
    return await this.studentsRepository.save(newStudent);
  }

  async findAllByClassroom(classroom: Classroom): Promise<Student[]> {
    return await this.studentsRepository.findBy({ classroom: { id: classroom.id } });
  }

  async findOneByUser(user: User): Promise<Student> {
    //return await this.studentsRepository.findOneByOrFail({ user }); //todo: investigar para control de excepciones centralizado
    const student = await this.studentsRepository.findOneBy({ user });
    if (!student) throw new NotFoundException(`Student with userId ${user.id} not found.`);
    return student;
  } 

  async updateByUser(user: User, updateStudentInput: UpdateStudentInput): Promise<Student> {
    const student = await this.findOneByUser(user);
    const { classroomId } = updateStudentInput;
    if (classroomId) {
      const classroom = await this.classroomsService.findOne(classroomId);
      student.classroom = classroom;
    }
    student.user = user;
    return await this.studentsRepository.save(student);
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
