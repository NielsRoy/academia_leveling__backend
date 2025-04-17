import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersResolver } from './teachers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';

@Module({
  providers: [TeachersResolver, TeachersService],
  imports: [
    TypeOrmModule.forFeature([
      Teacher
    ])
  ],
  exports: [
    TeachersService,
  ]
})
export class TeachersModule {}
