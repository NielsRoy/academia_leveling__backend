import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from '../entities/classroom.entity';
import { CreateClassroomInput } from '../dto/classroom/create-classroom.input';
import { Teacher } from '../entities/teacher.entity';
import { UpdateClassroomInput } from '../dto/classroom/update-classroom.input';
import { User } from '../../users/entities/user.entity';
import { TeachersService } from './teachers.service';
import { CoursesService } from '../../courses/courses.service';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';

@Injectable()
export class ClassroomsService {

  private logger = new Logger('ClassroomsService');

  constructor(

    @InjectRepository(Classroom)
    private readonly classroomsRepository: Repository<Classroom>,

    private readonly teachersService: TeachersService,
    private readonly coursesService :CoursesService,
  ) {}

  async create(createClassroomInput: CreateClassroomInput, user: User): Promise<Classroom> {
    const { courseId, ...rest } = createClassroomInput;
    const teacher = await this.teachersService.findOneByUser(user);
    const course = await this.coursesService.findOne(courseId);
    const newClassroom = this.classroomsRepository.create({
      ...rest, teacher, course,
    });
    return await this.classroomsRepository.save(newClassroom);
  }

  async findAllByTeacher(teacher: Teacher): Promise<Classroom[]> {
    return await this.classroomsRepository.findBy({ teacher: { id: teacher.id } });
  }

  async findOne(id: number): Promise<Classroom> {
    try {
      return await this.classroomsRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }

  update(id: number, updateClassroomInput: UpdateClassroomInput) {
    return `This action updates a #${id} classroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
