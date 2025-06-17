// src/lessons/dto/create-exercise.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateExerciseOptionInput } from './create-exercise-option.input';

@InputType()
export class CreateExerciseInput {
  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String)
  @IsString()
  statement: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  hint?: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  practiceTypeId: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  difficultyLevelId: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  basePoints?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  timeLimitSeconds?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  maxAttempts?: number;

  @Field(() => [CreateExerciseOptionInput], { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateExerciseOptionInput)
  @IsOptional()
  options?: CreateExerciseOptionInput[];
}