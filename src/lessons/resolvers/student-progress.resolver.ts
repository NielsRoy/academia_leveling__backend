// src/lessons/resolvers/student-progress.resolver.ts
import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { Role } from '../../auth/enum/role.enum';
import { User } from '../../users/entities/user.entity';
import { StudentProgressService } from '../services/student-progress.service';
import { StudentsService } from '../../students/students.service';
import { SubjectsService } from '../../subjects/subjects.service';
import { LessonsService } from '../services/lessons.service';
import { StudentLessonProgress } from '../entities/student-lesson-progress.entity';
import { StudentStepProgress } from '../entities/student-step-progress.entity';
import { StudentDoExercise } from '../entities/student-do-exercise.entity';
import { Student } from '../../students/entities/student.entity';
import { Lesson } from '../entities/lesson.entity';
import { LessonProgressFilterInput } from '../dto/lesson-progress-filter.input';

@Resolver(() => StudentLessonProgress)
@RequireAuth(Role.STUDENT)
export class StudentProgressResolver {
  constructor(
    private readonly studentProgressService: StudentProgressService,
    private readonly studentsService: StudentsService,
    private readonly subjectsService: SubjectsService,
    private readonly lessonsService: LessonsService,
  ) {}

  @Query(() => [StudentLessonProgress], { name: 'myLessonProgress' })
  async getMyLessonProgress(
    @Args('filter', { nullable: true }) filter?: LessonProgressFilterInput,
    @GetAuthUser() user?: User,
  ): Promise<StudentLessonProgress[]> {
    const student = await this.studentsService.findOneByUser(user);
    
    // Aquí implementarías la lógica para filtrar por subjectId o lessonId
    // Por simplicidad, retornamos un array vacío por ahora
    return [];
  }

  @Query(() => StudentLessonProgress, { name: 'myLessonProgressById' })
  async getMyLessonProgressById(
    @Args('lessonId', { type: () => Int }, ParseIntPipe) lessonId: number,
    @GetAuthUser() user: User,
  ): Promise<StudentLessonProgress> {
    const student = await this.studentsService.findOneByUser(user);
    const lesson = await this.lessonsService.findOne(lessonId);
    return this.studentProgressService.getLessonProgress(student, lesson);
  }

  // ResolveFields
  @ResolveField(() => Student, { name: 'student' })
  async getStudentByProgress(@Parent() progress: StudentLessonProgress): Promise<Student> {
    return progress.student;
  }

  @ResolveField(() => Lesson, { name: 'lesson' })
  async getLessonByProgress(@Parent() progress: StudentLessonProgress): Promise<Lesson> {
    return progress.lesson;
  }
}