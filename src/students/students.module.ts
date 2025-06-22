import { forwardRef, Module } from '@nestjs/common';
import { StudentsService } from './services/students.service';
import { StudentsResolver } from './resolvers/students.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { TeachersModule } from '../teachers/teachers.module';
import { UsersModule } from 'src/users/users.module';
import { Knowledge } from './entities/knowledge.entity';
import { StudentDoExercise } from './entities/student_do_exercise.entity';
import { AchievementsResolver } from './resolvers/achievements.resolver';
import { AchievementsService } from './services/achievements.service';
import { StudentAchievService } from './services/student_achiev.service';
import { Achievement } from './entities/achievement.entity';
import { StudentAchiev } from './entities/student_achiev.entity';
import { AdaptativeLearningService } from './services/adaptative-learning.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    StudentsResolver,
    StudentsService,
    AchievementsResolver,
    AchievementsService,
    StudentAchievService,
    AdaptativeLearningService,
  ],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      Student,
      Knowledge,
      StudentDoExercise,
      Achievement,
      StudentAchiev,
    ]),

    UsersModule,
    //forwardRef(() => TeachersModule), //todo: Refactorizar estas dependencias circulares
    TeachersModule,
    ConfigModule,
  ],
  exports: [
    StudentsService,
    TypeOrmModule,
  ]
})
export class StudentsModule {}
