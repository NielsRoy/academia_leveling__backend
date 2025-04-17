import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'students' })
@ObjectType()
export class Student {
  
  @PrimaryGeneratedColumn()
  @Field( () => ID )
  id: number;

  @Column({
    default: 1
  })
  @Field( () => Int )
  level: number;

  @Column({
    default: 0
  })
  @Field( () => Int )
  xp: number;

  @OneToOne( () => User )
  @JoinColumn({ name: 'user_id' })
  @Field( () => User )
  user: User;

}
