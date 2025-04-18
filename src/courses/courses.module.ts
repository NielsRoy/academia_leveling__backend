import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';

@Module({
  providers: [CoursesResolver, CoursesService],
  imports: [
    TypeOrmModule.forFeature([
      Course,
    ]),
  ],
  exports: [
    TypeOrmModule,
    CoursesService,
  ]
})
export class CoursesModule {}
