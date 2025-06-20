import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { ParseIntPipe } from '@nestjs/common';
import { LessonsService } from '../services/lessons.service';
import { Lesson } from '../entities/lesson.entity';

@Resolver(() => Lesson)
@RequireAuth()
export class LessonsResolver {
  constructor(
    private readonly lessonsService: LessonsService,
  ) {}

  @Query(() => [Lesson], { name: 'lessons' })
  async findAll(): Promise<Lesson[]> {
    return this.lessonsService.findAll();
  }

  @Query(() => Lesson, { name: 'lesson' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number
  ): Promise<Lesson> {
    return this.lessonsService.findOne(id);
  }
}
