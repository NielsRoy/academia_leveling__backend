// src/lessons/lessons.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonsService } from './services/lessons.service';
import { LessonStepsService } from './services/lesson-steps.service';
import { ExercisesService } from './services/exercises.service';
import { PracticeTypesService } from './services/practice-types.service';
import { DifficultyLevelsService } from './services/difficulty-levels.service';
import { StudentProgressService } from './services/student-progress.service';
import { LessonsResolver } from './resolvers/lessons.resolver';
import { LessonStepsResolver } from './resolvers/lesson-steps.resolver';
import { ExercisesResolver } from './resolvers/exercises.resolver';
import { StudentProgressResolver } from './resolvers/student-progress.resolver';
import { Lesson } from './entities/lesson.entity';
import { LessonStep } from './entities/lesson-step.entity';
import { Exercise } from './entities/exercise.entity';
import { ExerciseOption } from './entities/exercise-option.entity';
import { PracticeType } from './entities/practice-type.entity';
import { DifficultyLevel } from './entities/difficulty-level.entity';
import { StudentDoExercise } from './entities/student-do-exercise.entity';
import { StudentLessonProgress } from './entities/student-lesson-progress.entity';
import { StudentStepProgress } from './entities/student-step-progress.entity';
import { SubjectsModule } from '../subjects/subjects.module';
import { StudentsModule } from '../students/students.module';

@Module({
  providers: [
    LessonsService,
    LessonStepsService,
    ExercisesService,
    PracticeTypesService,
    DifficultyLevelsService,
    StudentProgressService,
    LessonsResolver,
    LessonStepsResolver,
    ExercisesResolver,
    StudentProgressResolver,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Lesson,
      LessonStep,
      Exercise,
      ExerciseOption,
      PracticeType,
      DifficultyLevel,
      StudentDoExercise,
      StudentLessonProgress,
      StudentStepProgress,
    ]),
    SubjectsModule,
    StudentsModule,
  ],
  exports: [
    LessonsService,
    LessonStepsService,
    ExercisesService,
    PracticeTypesService,
    DifficultyLevelsService,
    StudentProgressService,
  ]
})
export class LessonsModule {}