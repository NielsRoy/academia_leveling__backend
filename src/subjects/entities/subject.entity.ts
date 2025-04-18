import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity({ name: 'subjects' })
@ObjectType()
export class Subject {
  
  @PrimaryGeneratedColumn()
  @Field( () => Int )
  id: number;

  @Column()
  @Field( () => String )
  code: string;

  @Column()
  @Field( () => String )
  name: string;

  @Column({ 
    nullable: true,
  })
  @Field( () => String, { nullable: true } )
  description?: string;

  @ManyToOne( () => Course, (course) => course.subjects, { nullable: false, lazy: true } )
  //@Index('courseId-index')
  @Field( () => Course )
  course: Course;

}
