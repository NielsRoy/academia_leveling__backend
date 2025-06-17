// src/lessons/entities/lesson.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Subject } from '../../subjects/entities/subject.entity';
import { LessonStep } from './lesson-step.entity';
import { StudentLessonProgress } from './student-lesson-progress.entity';

export enum LessonType {
  LESSON = 'lesson',
  GAME = 'game'
}

export enum DifficultyLevelEnum {
  FACIL = 'facil',
  MEDIO = 'medio',
  AVANZADO = 'avanzado',
  PROFESIONAL = 'profesional'
}

@Entity({ name: 'lessons' })
@ObjectType()
export class Lesson {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column()
  @Field(() => Int)
  orderIndex: number;

  @Column({ default: 30 })
  @Field(() => Int)
  xpReward: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  estimatedDurationMinutes?: number;

  @Column({
    type: 'enum',
    enum: DifficultyLevelEnum,
    default: DifficultyLevelEnum.FACIL
  })
  @Field(() => String)
  difficultyLevel: DifficultyLevelEnum;

  @Column({
    type: 'enum',
    enum: LessonType,
    default: LessonType.LESSON
  })
  @Field(() => String)
  lessonType: LessonType;

  @Column({ default: true })
  @Field(() => Boolean)
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => Date)
  updatedAt: Date;

  @ManyToOne(() => Subject, { nullable: false, lazy: true })
  @JoinColumn({ name: 'subject_id' })
  @Index('LESSON_SUBJECT_ID_INDEX', ['subject_id'])
  @Field(() => Subject)
  subject: Subject;

  @OneToMany(() => LessonStep, (step) => step.lesson, { lazy: true })
  steps: LessonStep[];

  @OneToMany(() => StudentLessonProgress, (progress) => progress.lesson, { lazy: true })
  studentProgress: StudentLessonProgress[];
}
