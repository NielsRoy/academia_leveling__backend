// src/lessons/resolvers/exercises.resolver.ts
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { Role } from '../../auth/enum/role.enum';
import { User } from '../../users/entities/user.entity';
import { ExercisesService } from '../services/exercises.service';
import { LessonStepsService } from '../services/lesson-steps.service';
import { PracticeTypesService } from '../services/practice-types.service';
import { DifficultyLevelsService } from '../services/difficulty-levels.service';
import { StudentsService } from '../../students/students.service';
import { StudentProgressService } from '../services/student-progress.service';
import { Exercise } from '../entities/exercise.entity';
import { ExerciseOption } from '../entities/exercise-option.entity';
import { LessonStep } from '../entities/lesson-step.entity';
import { PracticeType } from '../entities/practice-type.entity';
import { DifficultyLevel } from '../entities/difficulty-level.entity';
import { StudentDoExercise } from '../entities/student-do-exercise.entity';
import { CreateExerciseInput } from '../dto/create-exercise.input';
import { UpdateExerciseInput } from '../dto/update-exercise.input';
import { CompleteExerciseInput } from '../dto/complete-exercise.input';

@Resolver(() => Exercise)
@RequireAuth()
export class ExercisesResolver {
  constructor(
    private readonly exercisesService: ExercisesService,
    private readonly lessonStepsService: LessonStepsService,
    private readonly practiceTypesService: PracticeTypesService,
    private readonly difficultyLevelsService: DifficultyLevelsService,
    private readonly studentsService: StudentsService,
    private readonly studentProgressService: StudentProgressService,
  ) {}

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Exercise)
  async createExercise(
    @Args('createExerciseInput') createExerciseInput: CreateExerciseInput,
    @Args('lessonStepId', { type: () => Int }, ParseIntPipe) lessonStepId: number,
  ): Promise<Exercise> {
    const lessonStep = await this.lessonStepsService.findOne(lessonStepId);
    return this.exercisesService.create(createExerciseInput, lessonStep);
  }

  @Query(() => [Exercise], { name: 'exercises' })
  async findExercisesByStep(
    @Args('lessonStepId', { type: () => Int }, ParseIntPipe) lessonStepId: number,
  ): Promise<Exercise[]> {
    const lessonStep = await this.lessonStepsService.findOne(lessonStepId);
    return this.exercisesService.findAllByLessonStep(lessonStep);
  }

  @Query(() => Exercise, { name: 'exercise' })
  async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Exercise> {
    return this.exercisesService.findOne(id);
  }

  @Query(() => [PracticeType], { name: 'practiceTypes' })
  async findAllPracticeTypes(): Promise<PracticeType[]> {
    return this.practiceTypesService.findAll();
  }

  @Query(() => [DifficultyLevel], { name: 'difficultyLevels' })
  async findAllDifficultyLevels(): Promise<DifficultyLevel[]> {
    return this.difficultyLevelsService.findAll();
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Exercise)
  async updateExercise(
    @Args('updateExerciseInput') updateExerciseInput: UpdateExerciseInput,
  ): Promise<Exercise> {
    return this.exercisesService.update(updateExerciseInput.id, updateExerciseInput);
  }

  @RequireAuth(Role.TEACHER)
  @Mutation(() => Boolean)
  async removeExercise(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.exercisesService.remove(id);
  }

  @RequireAuth(Role.STUDENT)
  @Mutation(() => StudentDoExercise)
  async completeExercise(
    @Args('exerciseId', { type: () => Int }, ParseIntPipe) exerciseId: number,
    @Args('completeExerciseInput') completeExerciseInput: CompleteExerciseInput,
    @GetAuthUser() user: User,
  ): Promise<StudentDoExercise> {
    const student = await this.studentsService.findOneByUser(user);
    const exercise = await this.exercisesService.findOne(exerciseId);
    return this.studentProgressService.completeExercise(student, exercise, completeExerciseInput);
  }

  // ResolveFields
  @ResolveField(() => [ExerciseOption], { name: 'options' })
  async getOptionsByExercise(@Parent() exercise: Exercise): Promise<ExerciseOption[]> {
    return this.exercisesService.findOptionsForExercise(exercise.id);
  }

  @ResolveField(() => LessonStep, { name: 'lessonStep' })
  async getLessonStepByExercise(@Parent() exercise: Exercise): Promise<LessonStep> {
    return exercise.lessonStep;
  }

  @ResolveField(() => PracticeType, { name: 'practiceType' })
  async getPracticeTypeByExercise(@Parent() exercise: Exercise): Promise<PracticeType> {
    return exercise.practiceType;
  }

  @ResolveField(() => DifficultyLevel, { name: 'difficultyLevel' })
  async getDifficultyLevelByExercise(@Parent() exercise: Exercise): Promise<DifficultyLevel> {
    return exercise.difficultyLevel;
  }

  @ResolveField(() => [StudentDoExercise], { name: 'attempts', nullable: true })
  async getAttemptsByExercise(
    @Parent() exercise: Exercise,
    @GetAuthUser() user: User,
  ): Promise<StudentDoExercise[] | null> {
    if (user.role !== Role.STUDENT) return null;
    
    try {
      const student = await this.studentsService.findOneByUser(user);
      return this.studentProgressService.getStudentExerciseAttempts(student, exercise);
    } catch {
      return null;
    }
  }
}