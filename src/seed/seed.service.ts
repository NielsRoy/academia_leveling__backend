import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../subjects/entities/subject.entity';
import { Repository } from 'typeorm';
import { Course } from '../courses/entities/course.entity';
import { SEED_MATH600_TOPICS, SEED_SUBJECTS_5, SEED_SUBJECTS_6 } from './data/seed-data';
import { Topic } from '../subjects/entities/topic.entity';

@Injectable()
export class SeedService {

  constructor(

    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,

    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

  ) {}

  async executeSeed(): Promise<boolean> {

    await this.deleteData();

    await this.loadCourses();

    return true;
  }

  async deleteData(): Promise<void> {

    await this.topicsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.subjectsRepository.createQueryBuilder()
      .delete().where({}).execute();

    await this.coursesRepository.createQueryBuilder()
      .delete().where({}).execute();

  }

  async loadCourses() {

    let fifth = this.coursesRepository.create({
      title: '5to. Primaria',
    });
    fifth = await this.coursesRepository.save(fifth);

    let sixth = this.coursesRepository.create({
      title: '6to. Primaria',
    });
    sixth = await this.coursesRepository.save(sixth);

    this.setSubjectsToCourse(fifth, SEED_SUBJECTS_5); 
    this.setSubjectsToCourse(sixth, SEED_SUBJECTS_6); 

    const math600 = await this.subjectsRepository.findOneBy({ code: 'MAT600' });
    if (math600) {
      await this.setTopicsToSubject(math600, SEED_MATH600_TOPICS);
    }
  }

  async setSubjectsToCourse(course: Course, subjects: any[]): Promise<void> {
    for (const subject of subjects) {
      const newSubject = this.subjectsRepository.create({
        ...subject,
        course,
      });
      await this.subjectsRepository.save(newSubject); 
    }
  }

  async setTopicsToSubject(subject: Subject, topics: any[]): Promise<void> {
    for (const topic of topics) {
      const newTopic = this.topicsRepository.create({
        ...topic,
        subject,
      });
      await this.topicsRepository.save(newTopic); 
    }
  }

}
