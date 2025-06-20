import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandlerUtil } from '../../common/utils/error-handler.util';
import { Exercise } from '../entities/exercise.entity';

@Injectable()
export class ExercisesService {

  private logger = new Logger('ExercisesService');

  constructor(

    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,

  ) {}

  async findAll(): Promise<Exercise[]> {
    return await this.exercisesRepository.find({});
  }

  async findOne(id: number): Promise<Exercise> {
    try {
      return await this.exercisesRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }
}
