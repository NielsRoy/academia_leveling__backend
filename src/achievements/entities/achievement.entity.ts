import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StudentAchiev } from 'src/student_achiev/entities/student_achiev.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'achievements' })
@ObjectType()
export class Achievement {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field( () => String )
  name: string;
  
  @Column({ 
    nullable: true,
  })
  @Field( () => String, { nullable: true } )
  description?: string;

  @OneToMany(() => StudentAchiev, studentAchiev => studentAchiev.achievement)
  studentAchiev: StudentAchiev[];

}
