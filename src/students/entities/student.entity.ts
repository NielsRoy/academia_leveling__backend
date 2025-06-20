import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Classroom } from '../../teachers/entities/classroom.entity';
import { StudentAchiev } from 'src/student_achiev/entities/student_achiev.entity';
import { StudentDoExercise } from './student_do_exercise.entity';
import { Knowledge } from './knowledge.entity';

@Entity({ name: 'students' })
@ObjectType()
export class Student {

  @PrimaryGeneratedColumn()
  @Field( () => Int )
  id: number;

  @Column({
    default: 1
  })
  @Field( () => Int )
  level: number;

  @Column({
    default: 0
  })
  @Field( () => Int )
  xp: number;

  @OneToOne( () => User, { lazy: true } )
  @JoinColumn({ name: 'user_id' })
  @Field( () => User )
  user: User;

  @ManyToOne( () => Classroom, (classroom) => classroom.students, { nullable: true, lazy: true } )
  @JoinColumn({ name: 'classroom_id' })
  @Index('STUDENT_CLASSROOM_ID_INDEX', ['classroom_id'])
  @Field( () => Classroom, { nullable: true } )
  classroom?: Classroom;
  
  @OneToMany(() => StudentAchiev, studentAchiev => studentAchiev.student)
  studentAchiev: StudentAchiev[];

  @OneToMany(() => StudentDoExercise, doneExercise => doneExercise.student)
  doneExercises: StudentDoExercise[];

  @OneToMany(() => Knowledge, knowledge => knowledge.student)
  knowledges: Knowledge[];
}
