import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { ClassroomsResolver } from './resolvers/classrooms.resolver';
import { TeachersResolver } from './resolvers/teachers.resolver';
import { TeachersService } from './services/teachers.service';
import { ClassroomsService } from './services/classrooms.service';
import { Classroom } from './entities/classroom.entity';
import { CoursesModule } from '../courses/courses.module';
import { StudentsModule } from '../students/students.module';

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
    CoursesModule,
    //forwardRef( () => StudentsModule ), //todo: Refactorizar estas dependencias circulares
  ],
  exports: [
    TeachersService,
    ClassroomsService,
  ]
})
export class TeachersModule {}
