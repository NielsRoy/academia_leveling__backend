import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandlerUtil } from '../common/utils/error-handler.util';

@Injectable()
export class CoursesService {

  private logger = new Logger('CoursesService');

  constructor(

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

  ) {}

  create(createCourseInput: CreateCourseInput) {
    return 'This action adds a new course';
  }

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find({});
  }

  async findOne(id: number): Promise<Course> {
    try {
      return await this.coursesRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }

  update(id: number, updateCourseInput: UpdateCourseInput) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
