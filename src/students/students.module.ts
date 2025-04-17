import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';

@Module({
  providers: [StudentsResolver, StudentsService],
  imports: [
    TypeOrmModule.forFeature([
      Student,
    ]),
  ],
  exports: [
    StudentsService,
  ]
})
export class StudentsModule {}
