import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { CoursesModule } from '../courses/courses.module';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from 'src/students/students.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    CoursesModule,
    TeachersModule,
    StudentsModule,
  ]
})
export class SeedModule {}
