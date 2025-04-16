import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../../enum/role.enum';

@InputType()
export class SignUpInput {

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

  @Field( () => Role )
  @IsEnum(Role)
  role: Role;

}