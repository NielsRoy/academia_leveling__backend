import { CreateStudentAchievInput } from './create-student_achiev.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentAchievInput extends PartialType(CreateStudentAchievInput) {
  @Field(() => Int)
  id: number;
}
