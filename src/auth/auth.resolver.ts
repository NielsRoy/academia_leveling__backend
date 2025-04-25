import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth-response.type';
import { RequireAuth } from './decorators/require-auth.decorator';
import { User } from '../users/entities/user.entity';
import { GetAuthUser } from './decorators/get-auth-user.decorator';
import { SignInInput } from './dto/inputs/sign-in.input';
import { SignUpStudentInput } from './dto/inputs/sign-up-student.input';
import { SignUpTeacherInput } from './dto/inputs/sign-up-teacher.input';

@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation( () => AuthResponse, { name: 'signUpStudent' })
  async signUpStudent(
    @Args('signUpStudentInput') signUpStudentInput: SignUpStudentInput
  ): Promise<AuthResponse> {
    return this.authService.signUpStudent(signUpStudentInput);
  }

  @Mutation( () => AuthResponse, { name: 'signUpTeacher' })
  async signUpTeacher(
    @Args('signUpTeacherInput') signUpTeacherInput: SignUpTeacherInput
  ): Promise<AuthResponse> {
    return this.authService.signUpTeacher(signUpTeacherInput);
  }

  @Mutation( () => AuthResponse, { name: 'signIn' } )
  async signIn(
    @Args('signInInput') signInInput: SignInInput 
  ): Promise<AuthResponse> {
    return this.authService.signIn(signInInput);
  }

  @Query( () => AuthResponse, { name: 'revalidateToken' } )
  @RequireAuth()
  revalidateToken(
    @GetAuthUser() user: User,
  ): AuthResponse {
    return this.authService.revalidateToken(user);
  }

}