import { Module } from '@nestjs/common';
import { StudentAchievService } from './student_achiev.service';
import { StudentAchievResolver } from './student_achiev.resolver';
import { StudentAchiev } from './entities/student_achiev.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [StudentAchievResolver, StudentAchievService],
  imports: [TypeOrmModule.forFeature([StudentAchiev])],
  exports: [StudentAchievService]
})
export class StudentAchievModule {}
