import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson.entity";
import { Subject } from "./subject.entity";
import { Knowledge } from "src/students/entities/knowledge.entity";

@Entity({ name: 'topics' })
@ObjectType()
export class Topic {

	@PrimaryColumn()
	@Field( () => Int )
	id: number;

	@Column()
	@Field( () => String )
	name: string;

	@Column({ 
	nullable: true,
	})
	@Field( () => String, { nullable: true } )
	description?: string;

	@Column({ name: 'xp_reward' })
	@Field( () => Int )
	xpReward: number;

	@ManyToOne( () => Subject, (subject) => subject.topics, { nullable: false, lazy: true } )
  @JoinColumn({ name: 'subject_id' })
  @Index('TOPIC_SUBJECT_ID_INDEX', ['subject_id'])
  @Field( () => Subject )
  subject: Subject; 

	@OneToMany( () => Lesson, (lesson) => lesson.topic, { lazy: true } )
  @Field( () => [Lesson] )
	lessons: Lesson[];

	@OneToMany(() => Knowledge, knowledge => knowledge.topic)
	knowledges: Knowledge[];
}