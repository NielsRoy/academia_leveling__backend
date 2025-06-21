import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Achievement } from 'src/students/entities/achievement.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students_achiev' })
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

