import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class SignUpStudentInput {

  @Field( () => String )
  @IsEmail()
  email: string;

  @Field( () => String )
  @MinLength(6)
  password: string;

  @Field( () => String )
  @IsNotEmpty()
  firstName: string;

  @Field( () => String )
  @IsNotEmpty()
  lastName: string;

}