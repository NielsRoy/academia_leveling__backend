import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subject } from "./subject.entity";

@Entity({ name: 'topics' })
@ObjectType()
export class Topic {
  
  @PrimaryGeneratedColumn()
  @Field( () => Int )
  id: number;

  @Column()
  @Field( () => String )
  name: string;

  @ManyToOne( () => Subject, (subject) => subject.topics, { nullable: false, lazy: true } )
  @JoinColumn({ name: 'subject_id' })
  @Index('TOPIC_SUBJECT_ID_INDEX', ['subject_id'])
  @Field( () => Subject )
  subject: Subject; 
}