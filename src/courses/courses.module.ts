import { Module } from '@nestjs/common';
import { CoursesService } from './services/courses.service';
import { CoursesResolver } from './resolvers/courses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';
import { Topic } from './entities/topic.entity';
import { Exercise } from './entities/exercise.entity';
import { ExOption } from './entities/ex_option.entity';
import { Subject } from './entities/subject.entity';
import { SubjectsResolver } from './resolvers/subjects.resolver';
import { SubjectsService } from './services/subjects.service';
import { ExercisesResolver } from './resolvers/exercises.resolver';
import { ExercisesService } from './services/exercises.service';
import { LessonsResolver } from './resolvers/lessons.resolver';
import { LessonsService } from './services/lessons.service';
import { TopicsResolver } from './resolvers/topics.resolver';
import { TopicsService } from './services/topics.service';

@Module({
  providers: [
    CoursesResolver,
    CoursesService,
    SubjectsResolver,
    SubjectsService,
    ExercisesResolver,
    ExercisesService,
    LessonsResolver,
    LessonsService,
    TopicsResolver,
    TopicsService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Course,
      Subject,
      Topic,
      Lesson,
      Exercise,
      ExOption,
    ]),
  ],
  exports: [
    TypeOrmModule,
    CoursesService,
    ExercisesService,
  ]
})
export class CoursesModule {}
