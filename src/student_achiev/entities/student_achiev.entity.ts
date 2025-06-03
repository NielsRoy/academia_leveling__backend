import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Achievement } from 'src/achievements/entities/achievement.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class StudentAchiev {

  @PrimaryGeneratedColumn()
  @Field(() => Int )
  id: number;

  @ManyToOne( () => Student, (student) => student.studentAchiev, { lazy: true } )
  @Field( () => Student )
  student: Student;

  @ManyToOne( () => Achievement, (achievement) => achievement.studentAchiev, { lazy: true } )
  @Field( () => Achievement )
  achievement: Achievement;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  earnedAt: Date;
}

