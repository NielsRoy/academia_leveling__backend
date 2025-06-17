// src/lessons/entities/student-lesson-progress.entity.ts
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Lesson } from './lesson.entity';

@Entity({ name: 'student_lesson_progress' })
@Unique(['student', 'lesson'])
@ObjectType()
export class StudentLessonProgress {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isUnlocked: boolean;

  @Column({ default: false })
  @Field(() => Boolean)
  isCompleted: boolean;

  @Column({ default: 1 })
  @Field(() => Int)
  currentStep: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0.0 })
  @Field(() => Float)
  completionPercentage: number;

  @Column({ default: 0 })
  @Field(() => Int)
  totalPointsEarned: number;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  startedAt?: Date;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  completedAt?: Date;

  @UpdateDateColumn({ name: 'last_accessed_at' })
  @Field(() => Date)
  lastAccessedAt: Date;

  @ManyToOne(() => Student, { nullable: false, lazy: true })
  @JoinColumn({ name: 'student_id' })
  @Index('STUDENT_LESSON_PROGRESS_STUDENT_ID_INDEX', ['student_id'])
  @Field(() => Student)
  student: Student;

  @ManyToOne(() => Lesson, (lesson) => lesson.studentProgress, { nullable: false, lazy: true })
  @JoinColumn({ name: 'lesson_id' })
  @Index('STUDENT_LESSON_PROGRESS_LESSON_ID_INDEX', ['lesson_id'])
  @Field(() => Lesson)
  lesson: Lesson;
}