import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../auth/enum/role.enum';

@Entity({ name: 'users' })
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field( () => ID )
  id: number;

  @Column({
    name: 'first_name',
  })
  @Field( () => String )
  firstName: string;
  
  @Column({
    name: 'last_name',
  })
  @Field( () => String )
  lastName: string;

  @Column({ unique: true })
  @Field( () => String )
  email: string;

  @Column()
  password: string;

  @Column()
  @Field( () => Role)
  role: Role;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true
  })
  @Field( () => Boolean )
  isActive: boolean;

}
