// src/lessons/dto/create-exercise-option.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsBoolean, IsOptional, IsInt, Min } from 'class-validator';

@InputType()
export class CreateExerciseOptionInput {
  @Field(() => String)
  @IsString()
  optionText: string;

  @Field(() => Boolean)
  @IsBoolean()
  isCorrect: boolean;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  orderIndex: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  explanation?: string;
}