// src/lessons/entities/lesson-step.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Lesson } from './lesson.entity';
import { Exercise } from './exercise.entity';
import { StudentStepProgress } from './student-step-progress.entity';

@Entity({ name: 'lesson_steps' })
@Unique(['lesson', 'stepNumber'])
@ObjectType()
export class LessonStep {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  stepNumber: number; // 1, 2, o 3

  @Column()
  @Field(() => String)
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  theoryContent?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  videoUrl?: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => Date)
  updatedAt: Date;

  @ManyToOne(() => Lesson, (lesson) => lesson.steps, { nullable: false, lazy: true })
  @JoinColumn({ name: 'lesson_id' })
  @Index('LESSON_STEP_LESSON_ID_INDEX', ['lesson_id'])
  @Field(() => Lesson)
  lesson: Lesson;

  @OneToMany(() => Exercise, (exercise) => exercise.lessonStep, { lazy: true })
  exercises: Exercise[];

  @OneToMany(() => StudentStepProgress, (progress) => progress.lessonStep, { lazy: true })
  studentProgress: StudentStepProgress[];
}