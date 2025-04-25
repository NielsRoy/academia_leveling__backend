import { IsPositive } from 'class-validator';
import { CreateStudentInput } from './create-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { SignUpStudentInput } from '../../auth/dto/inputs/sign-up-student.input';

@InputType()
export class UpdateStudentInput extends PartialType(SignUpStudentInput) {
  
  // @Field( () => Int )
  // @IsPositive()
  // id: number;

  @Field( () => Int, { nullable: true } )
  @IsPositive()
  classroomId?: number;

}
