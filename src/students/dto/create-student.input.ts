import { InputType, Field, Int } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@InputType()
export class CreateStudentInput {

  @Field( () => Int )
  @IsPositive()
  userId: number;

  @Field( () => Int, { nullable: true } )
  @IsPositive()
  classroomId?: number;
}
