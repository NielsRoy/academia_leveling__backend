// src/lessons/entities/practice-type.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity({ name: 'practice_types' })
@ObjectType()
export class PracticeType {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  code: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column({ default: true })
  @Field(() => Boolean)
  isActive: boolean;

  @OneToMany(() => Exercise, (exercise) => exercise.practiceType, { lazy: true })
  exercises: Exercise[];
}