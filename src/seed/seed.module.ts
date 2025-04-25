import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { SubjectsModule } from '../subjects/subjects.module';
import { CoursesModule } from '../courses/courses.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    CoursesModule,
    SubjectsModule,
  ]
})
export class SeedModule {}
