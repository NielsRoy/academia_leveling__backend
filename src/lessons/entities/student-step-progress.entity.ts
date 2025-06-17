// src/lessons/entities/student-step-progress.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { LessonStep } from './lesson-step.entity';

@Entity({ name: 'student_step_progress' })
@Unique(['student', 'lessonStep'])
@ObjectType()
export class StudentStepProgress {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isCompleted: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  exercisesCompleted: number;

  @Column({ default: 0 })
  @Field(() => Int)
  totalExercises: number;

  @Column({ default: 0 })
  @Field(() => Int)
  pointsEarned: number;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  completedAt?: Date;

  @ManyToOne(() => Student, { nullable: false, lazy: true })
  @JoinColumn({ name: 'student_id' })
  @Index('STUDENT_STEP_PROGRESS_STUDENT_ID_INDEX', ['student_id'])
  @Field(() => Student)
  student: Student;

  @ManyToOne(() => LessonStep, (step) => step.studentProgress, { nullable: false, lazy: true })
  @JoinColumn({ name: 'lesson_step_id' })
  @Index('STUDENT_STEP_PROGRESS_LESSON_STEP_ID_INDEX', ['lesson_step_id'])
  @Field(() => LessonStep)
  lessonStep: LessonStep;
}