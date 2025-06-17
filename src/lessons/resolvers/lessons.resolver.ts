// src/lessons/resolvers/lessons.resolver.ts
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { Role } from '../../auth/enum/role.enum';
import { User } from '../../users/entities/user.entity';
import { LessonsService } from '../services/lessons.service';
import { LessonStepsService } from '../services/lesson-steps.service';
import { SubjectsService } from '../../subjects/subjects.service';
import { StudentsService } from '../../students/students.service';
import { StudentProgressService } from '../services/student-progress.service';
import { Lesson } from '../entities/lesson.entity';
import { LessonStep } from '../entities/lesson-step.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import { StudentLessonProgress } from '../entities/student-lesson-progress.entity';
import { CreateLessonInput } from '../dto/create-lesson.input';
import { UpdateLessonInput } from '../dto/update-lesson.input';
import { LessonProgressFilterInput } from '../dto/lesson-progress-filter.input';
import { UnlockLessonInput } from '../dto/unlock-lesson.input';

@Resolver(() => Lesson)
@RequireAuth()
export class LessonsResolver {
  constructor(
    private readonly lessonsService: LessonsService,
    private readonly lessonStepsService: LessonStepsService,
    private readonly subjectsService: SubjectsService,
    private readonly studentsService: StudentsService,
    private readonly studentProgressService: StudentProgressService,
  ) {}

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Lesson)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
    @Args('subjectId', { type: () => Int }, ParseIntPipe) subjectId: number,
  ): Promise<Lesson> {
    const subject = await this.subjectsService.findOne(subjectId);
    return this.lessonsService.create(createLessonInput, subject);
  }

  @Query(() => [Lesson], { name: 'lessons' })
  async findAll(): Promise<Lesson[]> {
    return this.lessonsService.findAll();
  }

  @Query(() => [Lesson], { name: 'lessonsBySubject' })
  async findLessonsBySubject(
    @Args('subjectId', { type: () => Int }, ParseIntPipe) subjectId: number,
  ): Promise<Lesson[]> {
    const subject = await this.subjectsService.findOne(subjectId);
    return this.lessonsService.findAllBySubject(subject);
  }

  @Query(() => [Lesson], { name: 'lessonsWithProgress' })
  async findLessonsWithProgress(
    @Args('subjectId', { type: () => Int }, ParseIntPipe) subjectId: number,
    @GetAuthUser() user: User,
  ): Promise<Lesson[]> {
    const subject = await this.subjectsService.findOne(subjectId);
    return this.lessonsService.findAllBySubject(subject);
  }

  @Query(() => Lesson, { name: 'lesson' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Lesson> {
    return this.lessonsService.findOne(id);
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Lesson)
  async updateLesson(
    @Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
  ): Promise<Lesson> {
    return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Boolean)
  async removeLesson(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.lessonsService.remove(id);
  }

  @RequireAuth(Role.STUDENT)
  @Mutation(() => StudentLessonProgress)
  async unlockLesson(
    @Args('unlockLessonInput') unlockLessonInput: UnlockLessonInput,
    @GetAuthUser() user: User,
  ): Promise<StudentLessonProgress> {
    const student = await this.studentsService.findOneByUser(user);
    const lesson = await this.lessonsService.findOne(unlockLessonInput.lessonId);
    
    const progress = await this.studentProgressService.getLessonProgress(student, lesson);
    progress.isUnlocked = true;
    if (!progress.startedAt) {
      progress.startedAt = new Date();
    }
    
    // Aquí guardarías el progreso actualizado
    return progress;
  }

  // ResolveFields
  @ResolveField(() => [LessonStep], { name: 'steps' })
  async getStepsByLesson(@Parent() lesson: Lesson): Promise<LessonStep[]> {
    return this.lessonStepsService.findAllByLesson(lesson);
  }

  @ResolveField(() => Subject, { name: 'subject' })
  async getSubjectByLesson(@Parent() lesson: Lesson): Promise<Subject> {
    return lesson.subject;
  }

  @ResolveField(() => StudentLessonProgress, { name: 'progress', nullable: true })
  async getProgressByLesson(
    @Parent() lesson: Lesson,
    @GetAuthUser() user: User,
  ): Promise<StudentLessonProgress | null> {
    if (user.role !== Role.STUDENT) return null;
    
    try {
      const student = await this.studentsService.findOneByUser(user);
      return this.studentProgressService.getLessonProgress(student, lesson);
    } catch {
      return null;
    }
  }
}