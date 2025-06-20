import { Injectable, Logger } from '@nestjs/common';
import { Course } from '../entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';

@Injectable()
export class CoursesService {

  private logger = new Logger('CoursesService');

  constructor(

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

  ) {}

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
}
