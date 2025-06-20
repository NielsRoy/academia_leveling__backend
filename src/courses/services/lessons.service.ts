import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';
import { Lesson } from '../entities/lesson.entity';

@Injectable()
export class LessonsService {

  private logger = new Logger('LessonsService');

  constructor(

    @InjectRepository(Lesson)
    private readonly lessonsRepository: Repository<Lesson>,

  ) {}

  async findAll(): Promise<Lesson[]> {
    return await this.lessonsRepository.find({});
  }

  async findOne(id: number): Promise<Lesson> {
    try {
      return await this.lessonsRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }
}
