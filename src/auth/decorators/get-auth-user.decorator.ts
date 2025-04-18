import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

export const GetAuthUser = createParamDecorator( (data: string, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const user: User = ctx.getContext().req.user;
  if (!user) 
    throw new InternalServerErrorException(`No user inside the request - make sure using AuthGuard`);
  
  return (!data) ? user : user[data];
});