import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsPositive, Min, MinLength } from 'class-validator';

@InputType()
export class SignUpTeacherInput {

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

  @Field(() => Int)
  @IsPositive()
  @Min(999999)
  cellphone: number;

}