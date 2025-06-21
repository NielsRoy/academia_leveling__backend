import { InputType, Field, Int } from '@nestjs/graphql';
import { IsPositive, Min } from 'class-validator';

@InputType()
export class StudentDoExerciseInput {

    @Field(() => Date, { nullable: true })
    started_at?: Date;

    @Field(() => Date, { nullable: true })
    finished_at?: Date;

    @Min(0)
    @Field(() => Int)
    errors: number;

    @IsPositive()
    @Field(() => Int)
    exercise_id: number;

}
