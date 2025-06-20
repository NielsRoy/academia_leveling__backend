import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from './subject.entity';
import { Classroom } from '../../teachers/entities/classroom.entity';

@Entity({ name: 'courses' })
@ObjectType()
export class Course {
  
  @PrimaryColumn()
  @Field( () => Int )
  id: number;

  @Column()
  @Field( () => String )
  title: string;

  @Column({ 
    nullable: true,
  })
  @Field( () => String, { nullable: true } )
  description?: string;

  @OneToMany( () => Subject, (subject) => subject.course, { lazy: true } )
  @Field(() => [Subject])
  subjects: Subject[];

  @OneToMany( () => Classroom, (classroom) => classroom.course, { lazy: true } )
  classrooms: Classroom[];

}
