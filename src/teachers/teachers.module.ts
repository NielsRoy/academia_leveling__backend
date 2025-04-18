import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { ClassroomsResolver } from './resolvers/classrooms.resolver';
import { TeachersResolver } from './resolvers/teachers.resolver';
import { TeachersService } from './services/teachers.service';
import { ClassroomsService } from './services/classrooms.service';
import { Classroom } from './entities/classroom.entity';
import { CoursesModule } from '../courses/courses.module';

@Module({
  providers: [
    TeachersResolver,
    TeachersService,
    ClassroomsResolver,
    ClassroomsService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Teacher,
      Classroom,
    ]),
    CoursesModule
  ],
  exports: [
    TeachersService,
  ]
})
export class TeachersModule {}
