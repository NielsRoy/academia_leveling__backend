import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(
    private readonly authService: AuthService,
    configService: ConfigService
  ) {

    super({
      secretOrKey: configService.get('JWT_SECRET') ?? '',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;
    const user = await this.authService.validateUser(id);
    //? Lo que retorne esta funcion se agregara a la Request
    return user;
  }

}