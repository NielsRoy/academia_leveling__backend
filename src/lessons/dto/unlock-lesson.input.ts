// src/lessons/dto/unlock-lesson.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UnlockLessonInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  lessonId: number;
}