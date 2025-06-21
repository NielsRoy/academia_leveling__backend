import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { Exercise } from "../../courses/entities/exercise.entity";

@Entity({ name: 'students_do_exercises' })
@ObjectType()
export class StudentDoExercise {
	
	@PrimaryGeneratedColumn()
	@Field( () => Int )
	id: number;

	//@Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
	@Column('timestamp', { nullable: true })
	@Field( () => Date, { nullable: true } )
	started_at?: Date;

	@Column('timestamp', { nullable: true })
	@Field( () => Date, { nullable: true } )
	finished_at?: Date;

	@Column()
	@Field( () => Int )
	errors: number;

	@ManyToOne( () => Student, (student) => student.doneExercises, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'student_id' })
	@Index('DONE_EXERCISE_STUDENT_ID_INDEX', ['student_id'])
	//@Field( () => Student )
	student: Student;

	@ManyToOne( () => Exercise, (exercise) => exercise.doneByStudents, { nullable: false, lazy: true } )
	@JoinColumn({ name: 'exercise_id' })
	@Index('STUDENT_DONE_EXERCISE_ID_INDEX', ['exercise_id'])
	//@Field( () => Exercise )
	exercise: Exercise;
}