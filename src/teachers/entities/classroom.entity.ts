import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity({ name: 'classrooms' })
@ObjectType()
export class Classroom {
  
  @PrimaryGeneratedColumn()
  @Field( () => Int )
  id: number;

  @Column({
    type: 'uuid',
    unique: true,
    generated: 'uuid',
  })
  @Field( () => String )
  code: string;

  @Column()
  @Field( () => String )
  name: string;

  @Column({ nullable: true })
  @Field( () => String, { nullable: true } )
  description?: string;

  //@CreateDateColumn({ type: 'timestamp' })
  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @ManyToOne( () => Teacher, (teacher) => teacher.classrooms, { nullable: false, lazy: true } )
  @Index('teacherId-index')
  @Field( () => Teacher )
  teacher: Teacher;

  @ManyToOne( () => Course, (course) => course.classrooms, { nullable: false, lazy: true } )
  @Index('courseId-index')
  @Field( () => Course )
  course: Course;

}
