import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson.entity";
import { ExOption } from "./ex_option.entity";
import { StudentDoExercise } from "../../students/entities/student_do_exercise.entity";

@Entity({ name: 'exercises' })
@ObjectType()
export class Exercise {
	@PrimaryColumn()
	@Field( () => Int )
	id: number;

	@Column()
	@Field( () => String )
	severity: string;

	@Column()
	@Field( () => String )
	question: string;

	@Column()
	@Field( () => Int )
	type: number;

	@Column()
	@Field( () => Int )
	coins: number;

	@ManyToOne( () => Lesson, (lesson) => lesson.exercises, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'lesson_id' })
	@Index('EXERCISE_LESSON_ID_INDEX', ['lesson_id'])
	@Field( () => Lesson )
	lesson: Lesson;

	@OneToMany( () => ExOption, (exOption) => exOption.exercise, { lazy: true } )
	@Field( () => [ExOption] )
	options: ExOption[];

	@OneToMany(() => StudentDoExercise, doneExercise => doneExercise.exercise)
	doneByStudents: StudentDoExercise[];
}