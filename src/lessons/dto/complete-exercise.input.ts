// src/lessons/dto/complete-exercise.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsInt, IsOptional, Min } from 'class-validator';

@InputType()
export class CompleteExerciseInput {
  @Field(() => [Int])
  @IsArray()
  @IsInt({ each: true })
  selectedOptions: number[];

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  timeSpentSeconds?: number;
}