// src/lessons/dto/create-lesson.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt, IsEnum, IsBoolean, Min } from 'class-validator';
import { DifficultyLevelEnum, LessonType } from '../entities/lesson.entity';

@InputType()
export class CreateLessonInput {
  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  orderIndex: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  xpReward?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  estimatedDurationMinutes?: number;

  @Field(() => String, { nullable: true })
  @IsEnum(DifficultyLevelEnum)
  @IsOptional()
  difficultyLevel?: DifficultyLevelEnum;

  @Field(() => String, { nullable: true })
  @IsEnum(LessonType)
  @IsOptional()
  lessonType?: LessonType;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}