import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "./topic.entity";
import { Exercise } from "./exercise.entity";

@Entity({ name: 'lessons' })
@ObjectType()
export class Lesson {

	@PrimaryColumn()
	@Field( () => Int )
	id: number;

	@Column()
	@Field( () => String )
	title: string;

	@Column({ 
		nullable: true,
	})
	@Field( () => String, { nullable: true } )
	content?: string;

	@Column({ 
		name: 'img_link',
		nullable: true,
	})
	@Field( () => String, { nullable: true } )
	img_link?: string;

	@ManyToOne( () => Topic, (topic) => topic.lessons, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'topic_id' })
	@Index('LESSON_TOPIC_ID_INDEX', ['topic_id'])
	@Field( () => Topic )
	topic: Topic;

	@OneToMany( () => Exercise, (exercise) => exercise.lesson, { lazy: true } )
	@Field( () => [Exercise] )
	exercises: Exercise[];
}