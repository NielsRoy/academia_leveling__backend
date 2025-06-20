import { Injectable, Logger } from '@nestjs/common';
import { Subject } from '../entities/subject.entity';
import { Course } from '../entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandlerUtil } from 'src/common/utils/error-handler.util';

@Injectable()
export class SubjectsService {

  private logger = new Logger('SubjectsService');

  constructor(

    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,
  
  ) {}

  async findAll(): Promise<Subject[]> {
    return await this.subjectsRepository.findBy({});
  }

  async findAllByCourse(course: Course): Promise<Subject[]> {
    return await this.subjectsRepository.findBy({ course: { id: course.id } });
  }

  async findOne(searchParam: string): Promise<Subject> {
    try {
      const isNumeric = !isNaN(Number(searchParam));
      if (isNumeric){
        const subject = await this.subjectsRepository.findOneBy({ id: Number(searchParam) })
        if (subject) return subject;
      }
      return await this.subjectsRepository.findOneByOrFail({ code: searchParam });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }
}
