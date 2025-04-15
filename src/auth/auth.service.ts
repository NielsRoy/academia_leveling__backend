import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthResponse } from './types/auth-response.type';
import { JwtService } from '@nestjs/jwt';
import { SignUpInput } from './dto/inputs/sign-up.input';
import { SignInInput } from './dto/inputs/sign-in.input';
import { HASH_ADAPTER } from '../common/adapters/constants';
import { HashAdapter } from '../common/adapters/hash/hash.adapter';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,

    @Inject(HASH_ADAPTER)
    private readonly hashAdapter: HashAdapter,

  ) {}

  private getJwtToken(userId: number) {
    return this.jwtService.sign({ id: userId });
  }

  async signUp(signUpInput: SignUpInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signUpInput);
    const token = this.getJwtToken(user.id);
    return { token, user };
  }

  async signIn(signInInput: SignInInput): Promise<AuthResponse> {
    const { email, password } = signInInput;
    const user = await this.usersService.findOneByEmail(email);

    if (!this.hashAdapter.compare(password, user.password)) {
      throw new BadRequestException(`Incorrect credentials`);
    }
    const token = this.getJwtToken(user.id);
    return { token, user };
  }

  async validateUser(id: number): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user.isActive)
      throw new UnauthorizedException(`User is inactive, talk with an admin`);

    return user;
  }

  revalidateToken(user: User): AuthResponse {
    const token = this.getJwtToken(user.id);
    return { token, user };
  }

}