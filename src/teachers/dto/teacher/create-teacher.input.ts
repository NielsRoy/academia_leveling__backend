import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsInt, IsPositive, Min, MinLength } from 'class-validator';

@InputType()
export class CreateTeacherInput {
  
  @Field(() => Int)
  @IsPositive()
  @Min(999999)
  cellphone: number;

  // @Field(() => Int)
  // @IsPositive()
  // userId: number;

}
