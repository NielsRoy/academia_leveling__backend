import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CoursesService } from '../services/courses.service';
import { Course } from '../entities/course.entity';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { ParseIntPipe } from '@nestjs/common';
import { Role } from '../../auth/enum/role.enum';

@Resolver(() => Course)
@RequireAuth(Role.TEACHER)
export class CoursesResolver {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  @Query(() => [Course], { name: 'courses' })
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Query(() => Course, { name: 'course' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number
  ): Promise<Course> {
    return this.coursesService.findOne(id);
  }
}
