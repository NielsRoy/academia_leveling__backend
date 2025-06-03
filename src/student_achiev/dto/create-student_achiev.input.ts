import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentAchievInput {
  @Field(() => Int)
  studentId: number;

  @Field(() => Int)
  achievementId: number;
}
