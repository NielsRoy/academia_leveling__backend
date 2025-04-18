import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsResolver } from './subjects.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';

@Module({
  providers: [SubjectsResolver, SubjectsService],
  imports: [
    TypeOrmModule.forFeature([
      Subject,
    ]),
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class SubjectsModule {}
