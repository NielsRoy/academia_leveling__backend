// src/lessons/entities/exercise.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { LessonStep } from './lesson-step.entity';
import { PracticeType } from './practice-type.entity';
import { DifficultyLevel } from './difficulty-level.entity';
import { ExerciseOption } from './exercise-option.entity';
import { StudentDoExercise } from './student-do-exercise.entity';

@Entity({ name: 'exercises' })
@ObjectType()
export class Exercise {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column({ type: 'text' })
  @Field(() => String)
  statement: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  hint?: string;

  @Column()
  @Field(() => Int)
  orderIndex: number;

  @Column({ default: 10 })
  @Field(() => Int)
  basePoints: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  timeLimitSeconds?: number;

  @Column({ default: 3 })
  @Field(() => Int)
  maxAttempts: number;

  @Column({ default: true })
  @Field(() => Boolean)
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => Date)
  updatedAt: Date;

  @ManyToOne(() => LessonStep, (step) => step.exercises, { nullable: false, lazy: true })
  @JoinColumn({ name: 'lesson_step_id' })
  @Index('EXERCISE_LESSON_STEP_ID_INDEX', ['lesson_step_id'])
  @Field(() => LessonStep)
  lessonStep: LessonStep;

  @ManyToOne(() => PracticeType, (type) => type.exercises, { nullable: false, lazy: true })
  @JoinColumn({ name: 'practice_type_id' })
  @Index('EXERCISE_PRACTICE_TYPE_ID_INDEX', ['practice_type_id'])
  @Field(() => PracticeType)
  practiceType: PracticeType;

  @ManyToOne(() => DifficultyLevel, (level) => level.exercises, { nullable: false, lazy: true })
  @JoinColumn({ name: 'difficulty_level_id' })
  @Index('EXERCISE_DIFFICULTY_LEVEL_ID_INDEX', ['difficulty_level_id'])
  @Field(() => DifficultyLevel)
  difficultyLevel: DifficultyLevel;

  @OneToMany(() => ExerciseOption, (option) => option.exercise, { lazy: true })
  options: ExerciseOption[];

  @OneToMany(() => StudentDoExercise, (attempt) => attempt.exercise, { lazy: true })
  studentAttempts: StudentDoExercise[];
}