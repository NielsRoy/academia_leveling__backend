import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Classroom } from './classroom.entity';

@Entity({ name: 'teachers' })
@ObjectType()
export class Teacher {

  @PrimaryGeneratedColumn()
  @Field( () => ID )
  id: number;

  @Column()
  @Field( () => Int )
  cellphone: number;

  @OneToOne( () => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  @Field( () => User )
  user: User;

  @OneToMany( () => Classroom, (classroom) => classroom.teacher, { lazy: true } )
  //@Field( () => [Classroom] )
  classrooms: Classroom[];
}
