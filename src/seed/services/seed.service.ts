import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../../courses/entities/subject.entity';
import { DataSource, Repository } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';
import { SEED_CLASSROOMS, SEED_COURSES, SEED_EXERCISES, SEED_EXERCISES_OPTIONS, SEED_LESSONS, SEED_STUDENTS, SEED_SUBJECTS, SEED_TEACHERS, SEED_TOPICS, SEED_USERS } from '../data/seed-data';
import { Topic } from '../../courses/entities/topic.entity';
import { Classroom } from '../../teachers/entities/classroom.entity';
import { Student } from '../../students/entities/student.entity';
import { Lesson } from '../../courses/entities/lesson.entity';
import { Exercise } from '../../courses/entities/exercise.entity';
import { ExOption } from '../../courses/entities/ex_option.entity';
import { User } from '../../users/entities/user.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Injectable()
export class SeedService {

  constructor(

    @InjectRepository(ExOption)
    private readonly exOptionsRepository: Repository<ExOption>,

    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,

    @InjectRepository(Lesson)
    private readonly lessonsRepository: Repository<Lesson>,

    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,

    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,

    @InjectRepository(Classroom)
    private readonly classroomsRepository: Repository<Classroom>,

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>,

    private readonly dataSource: DataSource,

  ) {}

  async executeSeed(): Promise<boolean> {

    await this.deleteData();

    await this.loadCourses();

    await this.loadSubjects();

    await this.loadTopics();

    await this.loadLessons();

    await this.loadExercises();

    await this.loadExercisesOptions();

    await this.loadUsers();

    await this.loadTeachers();
    
    await this.loadClassrooms();
    
    await this.loadStudents();

    return true;
  }

  async deleteData(): Promise<void> {
    await this.exOptionsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.exercisesRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.lessonsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.topicsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.subjectsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.studentsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.classroomsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.usersRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.teachersRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.coursesRepository.createQueryBuilder()
      .delete().where({}).execute();
    
  }

  async loadCourses() {
    await this.coursesRepository.createQueryBuilder().insert()
      .values(SEED_COURSES).execute();
  }

  async loadSubjects() {
    await this.subjectsRepository.createQueryBuilder().insert()
      .values(SEED_SUBJECTS).execute();
  }

  async loadTopics() {
    await this.topicsRepository.createQueryBuilder().insert()
      .values(SEED_TOPICS).execute();
  }

  async loadLessons() {
    await this.lessonsRepository.createQueryBuilder().insert()
      .values(SEED_LESSONS).execute();
  }

  async loadExercises() {
    await this.exercisesRepository.createQueryBuilder().insert()
      .values(SEED_EXERCISES).execute();
  }

  async loadExercisesOptions() {
    await this.exOptionsRepository.createQueryBuilder().insert()
      .values(SEED_EXERCISES_OPTIONS).execute();
  } 

  async loadUsers() {
    const insertQuery = `
      INSERT INTO users (id, first_name, last_name, email, password, role)
      VALUES ${SEED_USERS.map(user => 
        `(${user.id}, '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.role}')`
      ).join(', ')}
    `;

    await this.dataSource.query(insertQuery);
  }

  async loadStudents() {
    await this.studentsRepository.createQueryBuilder().insert()
      .values(SEED_STUDENTS).execute();
  }

  async loadTeachers() {
    await this.teachersRepository.createQueryBuilder().insert()
      .values(SEED_TEACHERS).execute();
  }

  async loadClassrooms() {
    const insertQuery = `
      INSERT INTO classrooms (id, name, teacher_id, course_id)
      VALUES ${SEED_CLASSROOMS.map(classroom => 
        `(${classroom.id}, '${classroom.name}', '${classroom.teacher.id}', '${classroom.course.id}')`
      ).join(', ')}
    `;

    await this.dataSource.query(insertQuery);

    // await this.classroomsRepository.createQueryBuilder().insert()
    //   .values(SEED_CLASSROOMS).execute();
  }
}