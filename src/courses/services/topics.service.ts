import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';
import { Topic } from '../entities/topic.entity';

@Injectable()
export class TopicsService {

  private logger = new Logger('TopicsService');

  constructor(

    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,

  ) {}

  async findAll(): Promise<Topic[]> {
    return await this.topicsRepository.find({});
  }

  async findOne(id: number): Promise<Topic> {
    try {
      return await this.topicsRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }
}
