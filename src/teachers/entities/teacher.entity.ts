import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Classroom } from './classroom.entity';

@Entity({ name: 'teachers' })
@ObjectType()
export class Teacher {
  
  @PrimaryColumn()
  @Field( () => Int )
  id: number;

  @Column()
  @Field( () => Int )
  cellphone: number;

  @OneToOne( () => User, { lazy: true, onDelete: 'CASCADE' } )
  @JoinColumn({ name: 'user_id' })
  @Field( () => User )
  user: User;

  @OneToMany( () => Classroom, (classroom) => classroom.teacher, { lazy: true } )
  //@Field( () => [Classroom] )
  classrooms: Classroom[];
}
