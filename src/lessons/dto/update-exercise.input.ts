// src/lessons/dto/update-exercise.input.ts
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateExerciseInput } from './create-exercise.input';

@InputType()
export class UpdateExerciseInput extends PartialType(CreateExerciseInput) {
  @Field(() => Int)
  id: number;
}