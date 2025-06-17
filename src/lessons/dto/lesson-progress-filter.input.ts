// src/lessons/dto/lesson-progress-filter.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, Min } from 'class-validator';

@InputType()
export class LessonProgressFilterInput {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  subjectId?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1)
  lessonId?: number;
}
