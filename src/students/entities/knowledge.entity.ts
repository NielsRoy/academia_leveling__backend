import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Topic } from "../../courses/entities/topic.entity";

@Entity({ name: 'knowledges' })
@ObjectType()
export class Knowledge {

	@PrimaryGeneratedColumn()
	@Field( () => Int )
	id: number;

	@Column({ type: 'float' })
  	PL: number;

	@ManyToOne( () => Student, (student) => student.knowledges, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'student_id' })
	@Index('KNOWLEDGE_STUDENT_ID_INDEX', ['student_id'])
	@Field( () => Student )
	student: Student;

	@ManyToOne( () => Topic, (topic) => topic.knowledges, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'topic_id' })
	@Index('KNOWLEDGE_TOPIC_ID_INDEX', ['topic_id'])
	@Field( () => Topic )
	topic: Topic;

	
}