import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../courses/entities/subject.entity';
import { Repository } from 'typeorm';
import { Course } from '../courses/entities/course.entity';
import { SEED_COURSES, SEED_EXERCISES, SEED_EXERCISES_OPTIONS, SEED_LESSONS, SEED_SUBJECTS, SEED_TOPICS } from './data/seed-data';
import { Topic } from '../courses/entities/topic.entity';
import { Classroom } from '../teachers/entities/classroom.entity';
import { Student } from '../students/entities/student.entity';
import { Lesson } from '../courses/entities/lesson.entity';
import { Exercise } from '../courses/entities/exercise.entity';
import { ExOption } from '../courses/entities/ex_option.entity';

@Injectable()
export class SeedService {

  constructor(

    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,

    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,

    @InjectRepository(Classroom)
    private readonly classroomsRepository: Repository<Classroom>,

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    @InjectRepository(Lesson)
    private readonly lessonsRepository: Repository<Lesson>,

    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,

    @InjectRepository(ExOption)
    private readonly exOptionsRepository: Repository<ExOption>,

  ) {}

  async executeSeed(): Promise<boolean> {

    await this.deleteData();

    await this.loadCourses();

    await this.loadSubjects();

    await this.loadTopics();

    await this.loadLessons();

    await this.loadExercises();

    await this.loadExercisesOptions();

    return true;
  }

  async deleteData(): Promise<void> {

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

}
