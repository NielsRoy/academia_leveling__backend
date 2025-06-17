// src/lessons/entities/difficulty-level.entity.ts
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity({ name: 'difficulty_levels' })
@ObjectType()
export class DifficultyLevel {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  code: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 1.0 })
  @Field(() => Float)
  pointsMultiplier: number;

  @Column({ nullable: true, length: 7 })
  @Field(() => String, { nullable: true })
  color?: string;

  @Column({ default: 0 })
  @Field(() => Int)
  orderIndex: number;

  @OneToMany(() => Exercise, (exercise) => exercise.difficultyLevel, { lazy: true })
  exercises: Exercise[];
}