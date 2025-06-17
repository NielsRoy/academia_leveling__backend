// src/lessons/dto/update-lesson-step.input.ts
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateLessonStepInput } from './create-lesson-step.input';

@InputType()
export class UpdateLessonStepInput extends PartialType(CreateLessonStepInput) {
  @Field(() => Int)
  id: number;
}