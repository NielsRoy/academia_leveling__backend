import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { META_ROLES } from '../decorators/role-protected.decorator';
import { User } from '../../users/entities/user.entity';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Role } from '../enum/role.enum';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  
  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles =
      this.reflector.get<Role[]>(META_ROLES, context.getHandler()) ??
      this.reflector.get<Role[]>(META_ROLES, context.getClass());
    
    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user as User;

    if (!user)
      throw new BadRequestException('User not found');

    // await this.insertPersonToRequest(req, user);

    if (validRoles.includes(user.role)) {
      return true;
    }

    throw new ForbiddenException(
      `User ${user.firstName} ${user.lastName} needs a valid role: [${validRoles}]`
    );
  }

  // private async insertPersonToRequest(req: any, user: User): Promise<void> {
  //   try{
  //     const teacher = await this.teachersService.findOneByUser(user);
  //     req.teacher = teacher;
  //   } catch (error) {

  //   }

  //   try{
  //     const student = this.studentsService.findOneByUser(user);
  //     req.student = student;
  //   } catch (error) {
      
  //   }
  // }

}