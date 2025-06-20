import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.entity";

@Entity({ name: 'ex_options' })
@ObjectType()
export class ExOption {
  @PrimaryGeneratedColumn()
	@Field( () => Int )
	id: number;

	@Column()
	@Field( () => String )
	text: string;

	@Column({ name: 'is_correct' })
	@Field( () => Boolean )
	is_correct: boolean;

	@Column()
	@Field( () => Int )
	index: number;

	@ManyToOne( () => Exercise, (exercise) => exercise.options, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'exercise_id' })
	@Index('EXOPTION_EXERCISE_ID_INDEX', ['exercise_id'])
	@Field( () => Exercise )
	exercise: Exercise;
}