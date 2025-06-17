import { forwardRef, Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentAchievModule } from '../student_achiev/student_achiev.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [StudentsResolver, StudentsService],
  imports: [
    TypeOrmModule.forFeature([
      Student,
    ]),

    StudentAchievModule,
    UsersModule,
    //forwardRef(() => TeachersModule), //todo: Refactorizar estas dependencias circulares
    TeachersModule,
  ],
  exports: [
    StudentsService,
  ]
})
export class StudentsModule {}
