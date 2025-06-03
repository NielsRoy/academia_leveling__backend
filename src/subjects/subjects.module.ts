import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsResolver } from './subjects.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Topic } from './entities/topic.entity';

@Module({
  providers: [SubjectsResolver, SubjectsService],
  imports: [
    TypeOrmModule.forFeature([
      Subject,
      Topic,
    ]),
  ],
  exports: [
    TypeOrmModule,
    SubjectsService,
  ]
})
export class SubjectsModule {}
