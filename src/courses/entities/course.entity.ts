import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from '../../subjects/entities/subject.entity';
import { Classroom } from '../../teachers/entities/classroom.entity';

@Entity({ name: 'courses' })
@ObjectType()
export class Course {
  
  @PrimaryGeneratedColumn()
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

  @OneToMany( () => Subject, (subject) => subject.course )
  subjects: Subject[];

  @OneToMany( () => Classroom, (classroom) => classroom.course )
  classrooms: Classroom[];

}
