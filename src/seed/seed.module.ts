import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { CoursesModule } from '../courses/courses.module';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from '../students/students.module';
import { UsersModule } from '../users/users.module';
import { CommonModule } from '../common/common.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    CoursesModule,
    TeachersModule,
    StudentsModule,
    UsersModule,
  ]
})
export class SeedModule {}
