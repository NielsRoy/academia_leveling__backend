// src/lessons/resolvers/lesson-steps.resolver.ts
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { Role } from '../../auth/enum/role.enum';
import { User } from '../../users/entities/user.entity';
import { LessonStepsService } from '../services/lesson-steps.service';
import { ExercisesService } from '../services/exercises.service';
import { LessonsService } from '../services/lessons.service';
import { StudentsService } from '../../students/students.service';
import { StudentProgressService } from '../services/student-progress.service';
import { LessonStep } from '../entities/lesson-step.entity';
import { Exercise } from '../entities/exercise.entity';
import { Lesson } from '../entities/lesson.entity';
import { StudentStepProgress } from '../entities/student-step-progress.entity';
import { CreateLessonStepInput } from '../dto/create-lesson-step.input';
import { UpdateLessonStepInput } from '../dto/update-lesson-step.input';

@Resolver(() => LessonStep)
@RequireAuth()
export class LessonStepsResolver {
  constructor(
    private readonly lessonStepsService: LessonStepsService,
    private readonly exercisesService: ExercisesService,
    private readonly lessonsService: LessonsService,
    private readonly studentsService: StudentsService,
    private readonly studentProgressService: StudentProgressService,
  ) {}

  @RequireAuth(Role.TEACHER)
  @Mutation(() => LessonStep)
  async createLessonStep(
    @Args('createLessonStepInput') createLessonStepInput: CreateLessonStepInput,
    @Args('lessonId', { type: () => Int }, ParseIntPipe) lessonId: number,
  ): Promise<LessonStep> {
    const lesson = await this.lessonsService.findOne(lessonId);
    return this.lessonStepsService.create(createLessonStepInput, lesson);
  }

  @Query(() => [LessonStep], { name: 'lessonSteps' })
  async findStepsByLesson(
    @Args('lessonId', { type: () => Int }, ParseIntPipe) lessonId: number,
  ): Promise<LessonStep[]> {
    const lesson = await this.lessonsService.findOne(lessonId);
    return this.lessonStepsService.findAllByLesson(lesson);
  }

  @Query(() => LessonStep, { name: 'lessonStep' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<LessonStep> {
    return this.lessonStepsService.findOne(id);
  }

  @Query(() => LessonStep, { name: 'lessonStepByNumber' })
  async findByLessonAndStep(
    @Args('lessonId', { type: () => Int }, ParseIntPipe) lessonId: number,
    @Args('stepNumber', { type: () => Int }, ParseIntPipe) stepNumber: number,
  ): Promise<LessonStep> {
    return this.lessonStepsService.findByLessonAndStep(lessonId, stepNumber);
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => LessonStep)
  async updateLessonStep(
    @Args('updateLessonStepInput') updateLessonStepInput: UpdateLessonStepInput,
  ): Promise<LessonStep> {
    return this.lessonStepsService.update(updateLessonStepInput.id, updateLessonStepInput);
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Boolean)
  async removeLessonStep(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.lessonStepsService.remove(id);
  }

  // ResolveFields
  @ResolveField(() => [Exercise], { name: 'exercises' })
  async getExercisesByStep(@Parent() lessonStep: LessonStep): Promise<Exercise[]> {
    return this.exercisesService.findAllByLessonStep(lessonStep);
  }

  @ResolveField(() => Lesson, { name: 'lesson' })
  async getLessonByStep(@Parent() lessonStep: LessonStep): Promise<Lesson> {
    return lessonStep.lesson;
  }

  @ResolveField(() => StudentStepProgress, { name: 'progress', nullable: true })
  async getProgressByStep(
    @Parent() lessonStep: LessonStep,
    @GetAuthUser() user: User,
  ): Promise<StudentStepProgress | null> {
    if (user.role !== Role.STUDENT) return null;
    
    try {
      const student = await this.studentsService.findOneByUser(user);
      return this.studentProgressService.getStepProgress(student, lessonStep);
    } catch {
      return null;
    }
  }
}