import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Subject } from '../subjects/entities/subject.entity';
import { SubjectsService } from '../subjects/subjects.service';
import { RequireAuth } from '../auth/decorators/require-auth.decorator';
import { ParseIntPipe } from '@nestjs/common';
import { Role } from '../auth/enum/role.enum';

@Resolver(() => Course)
@RequireAuth()
export class CoursesResolver {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly subjectsService: SubjectsService,
  ) {}

  // @Mutation(() => Course)
  // createCourse(@Args('createCourseInput') createCourseInput: CreateCourseInput) {
  //   return this.coursesService.create(createCourseInput);
  // }

  @RequireAuth(Role.TEACHER)
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

  // @Mutation(() => Course)
  // updateCourse(@Args('updateCourseInput') updateCourseInput: UpdateCourseInput) {
  //   return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  // }

  // @Mutation(() => Course)
  // removeCourse(@Args('id', { type: () => Int }) id: number) {
  //   return this.coursesService.remove(id);
  // }

  @ResolveField( () => [Subject], { name: 'subjects' } )
  async getSubjectsByCourse(
    @Parent() course: Course,
    // @Args() paginationArgs: PaginationArgs,
    // @Args() searchArgs: SearchArgs,
  ): Promise<Subject[]> {
    return this.subjectsService.findAllByCourse(course);
  }
}
