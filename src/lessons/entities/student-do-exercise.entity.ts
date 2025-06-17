// src/lessons/entities/student-do-exercise.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Exercise } from './exercise.entity';

@Entity({ name: 'students_do_exercises' })
@Unique(['student', 'exercise', 'attemptNumber'])
@ObjectType()
export class StudentDoExercise {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ default: 1 })
  @Field(() => Int)
  attemptNumber: number;

  @Column({ type: 'json', nullable: true })
  @Field(() => String, { nullable: true })
  selectedOptions?: string; // JSON string de IDs seleccionados

  @Column({ default: false })
  @Field(() => Boolean)
  isCorrect: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  pointsEarned: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  timeSpentSeconds?: number;

  @Column({ default: 0 })
  @Field(() => Int)
  errors: number;

  @CreateDateColumn({ name: 'finished_at' })
  @Field(() => Date)
  finishedAt: Date;

  @ManyToOne(() => Student, { nullable: false, lazy: true })
  @JoinColumn({ name: 'student_id' })
  @Index('STUDENT_DO_EXERCISE_STUDENT_ID_INDEX', ['student_id'])
  @Field(() => Student)
  student: Student;

  @ManyToOne(() => Exercise, (exercise) => exercise.studentAttempts, { nullable: false, lazy: true })
  @JoinColumn({ name: 'exercise_id' })
  @Index('STUDENT_DO_EXERCISE_EXERCISE_ID_INDEX', ['exercise_id'])
  @Field(() => Exercise)
  exercise: Exercise;
}
