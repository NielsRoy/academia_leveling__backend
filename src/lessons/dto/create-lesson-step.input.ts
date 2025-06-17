// src/lessons/dto/create-lesson-step.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

@InputType()
export class CreateLessonStepInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(3)
  stepNumber: number;

  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  theoryContent?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  videoUrl?: string;
}