import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  TEACHER = 'TEACHER',
  STUDENT ='STUDENT',
}

registerEnumType( Role, { name: 'Role' } );