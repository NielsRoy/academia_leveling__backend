import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {

  @Field(() => Int)
  userId: number;

}
