import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth-response.type';
import { RequireAuth } from './decorators/require-auth.decorator';
import { User } from '../users/entities/user.entity';
import { GetAuthUser } from './decorators/get-auth-user.decorator';
import { SignUpInput } from './dto/inputs/sign-up.input';
import { SignInInput } from './dto/inputs/sign-in.input';

@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation( () => AuthResponse, { name: 'signUp' })
  async signUp(
    @Args('signUpInput') signUpInput: SignUpInput
  ): Promise<AuthResponse> {
    return this.authService.signUp(signUpInput);
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