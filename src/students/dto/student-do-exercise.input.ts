import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsPositive, Min } from 'class-validator';

@InputType()
export class StudentDoExerciseInput {

    @Field(() => Date, { nullable: true })
    @IsOptional()
    started_at?: Date;

    @Field(() => Date, { nullable: true })
    @IsOptional()
    finished_at?: Date;

    @Min(0)
    @Field(() => Int)
    errors: number;

    @IsPositive()
    @Field(() => Int)
    exercise_id: number;

}
