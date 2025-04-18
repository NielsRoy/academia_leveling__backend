import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateClassroomInput {
  
  @Field( () => String )
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @Field( () => String, { nullable: true } )
  @IsString()
  @IsOptional()
  description?: string;

  @Field( () => Int )
  @IsPositive()
  courseId: number;

}
