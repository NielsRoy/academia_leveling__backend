import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { ParseIntPipe } from '@nestjs/common';
import { Exercise } from '../entities/exercise.entity';
import { ExercisesService } from '../services/exercises.service';

@Resolver(() => Exercise)
@RequireAuth()
export class ExercisesResolver {
  constructor(
    private readonly exercisesService: ExercisesService,
  ) {}

  @Query(() => [Exercise], { name: 'exercises' })
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }

  @Query(() => Exercise, { name: 'exercise' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number
  ): Promise<Exercise> {
    return this.exercisesService.findOne(id);
  }
}
