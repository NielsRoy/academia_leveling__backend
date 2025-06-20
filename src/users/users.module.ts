import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CommonModule } from '../common/common.module';

@Module({
  providers: [UsersResolver, UsersService],
  exports: [ UsersService, TypeOrmModule, ],
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),

    CommonModule,
  ]
})
export class UsersModule {}
