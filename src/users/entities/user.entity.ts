import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../auth/enum/role.enum';

@Entity({ name: 'users' })
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field( () => ID )
  id: number;

  @Column()
  @Field( () => String )
  fullName: string;

  @Column({ unique: true })
  @Field( () => String )
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.STUDENT })
  @Field( () => Role)
  role: Role;

  @Column({
    type: 'boolean',
    default: true
  })
  @Field( () => Boolean )
  isActive: boolean;

}
