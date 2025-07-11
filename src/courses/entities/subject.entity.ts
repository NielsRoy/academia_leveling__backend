import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';
import { Topic } from './topic.entity';

@Entity({ name: 'subjects' })
@ObjectType()
export class Subject {
  
  @PrimaryColumn()
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
  @JoinColumn({ name: 'course_id' })
  @Index('SUBJECT_COURSE_ID_INDEX', ['course_id'])
  @Field( () => Course )
  course: Course;

  @OneToMany(() => Topic, (topic) => topic.subject, { lazy: true } )
  @Field( () => [Topic] )
  topics: Topic[];
}
