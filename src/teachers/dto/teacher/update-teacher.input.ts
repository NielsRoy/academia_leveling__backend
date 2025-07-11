import { IsPositive } from 'class-validator';
import { CreateTeacherInput } from './create-teacher.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeacherInput extends PartialType(CreateTeacherInput) {
  
  @Field(() => Int)
  @IsPositive()
  id: number;

}
