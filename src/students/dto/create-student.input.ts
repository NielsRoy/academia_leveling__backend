import { InputType, Field, Int } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@InputType()
export class CreateStudentInput {

  @IsPositive()
  classroomId?: number;
}
