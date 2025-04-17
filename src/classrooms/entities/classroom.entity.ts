import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'classrooms' })
@ObjectType()
export class Classroom {
  
  @PrimaryGeneratedColumn()
  @Field( () => ID )
  id: number;

  @Column({
    type: 'uuid',
    unique: true,
    generated: 'uuid',
  })
  @Field( () => String )
  code: string;

  @Column()
  @Field( () => String )
  name: string;

  @Column({ nullable: true })
  @Field( () => String, { nullable: true } )
  description?: string;

  //@CreateDateColumn({ type: 'timestamp' })
  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

}
