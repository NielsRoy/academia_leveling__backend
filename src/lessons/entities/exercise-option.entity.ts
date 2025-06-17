// src/lessons/entities/exercise-option.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity({ name: 'exercise_options' })
@ObjectType()
export class ExerciseOption {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'text' })
  @Field(() => String)
  optionText: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isCorrect: boolean;

  @Column()
  @Field(() => Int)
  orderIndex: number;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  explanation?: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @ManyToOne(() => Exercise, (exercise) => exercise.options, { nullable: false, lazy: true })
  @JoinColumn({ name: 'exercise_id' })
  @Index('EXERCISE_OPTION_EXERCISE_ID_INDEX', ['exercise_id'])
  @Field(() => Exercise)
  exercise: Exercise;
}