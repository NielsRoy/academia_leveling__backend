import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { Course } from '../../courses/entities/course.entity';
import { Student } from '../../students/entities/student.entity';

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
  @JoinColumn({ name: 'teacher_id' })
  @Index('CLASSROOM_TEACHER_ID_INDEX', ['teacher_id'])
  @Field( () => Teacher )
  teacher: Teacher;

  @ManyToOne(() => Course, (course) => course.classrooms, { nullable: false, lazy: true })
  @JoinColumn({ name: 'course_id' })
  @Index('CLASSROOM_COURSE_ID_INDEX', ['course_id'])
  @Field(() => Course)
  course: Course;

  @OneToMany( () => Student, (student) => student.classroom, { lazy: true } )
  students: Student[];
}
