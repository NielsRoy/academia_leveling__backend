// src/lessons/services/lessons.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from '../entities/lesson.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import { CreateLessonInput } from '../dto/create-lesson.input';
import { UpdateLessonInput } from '../dto/update-lesson.input';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonsRepository: Repository<Lesson>,
  ) {}

  async create(createLessonInput: CreateLessonInput, subject: Subject): Promise<Lesson> {
    const newLesson = this.lessonsRepository.create({
      ...createLessonInput,
      subject,
    });
    return await this.lessonsRepository.save(newLesson);
  }

  async findAll(): Promise<Lesson[]> {
    return await this.lessonsRepository.find({
      where: { isActive: true },
      order: { orderIndex: 'ASC' },
    });
  }

  async findAllBySubject(subject: Subject): Promise<Lesson[]> {
    return await this.lessonsRepository.find({
      where: { subject: { id: subject.id }, isActive: true },
      order: { orderIndex: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findOne({
      where: { id, isActive: true },
    });
    if (!lesson) {
      throw new NotFoundException(`Lesson with id ${id} not found`);
    }
    return lesson;
  }

  async update(id: number, updateLessonInput: UpdateLessonInput): Promise<Lesson> {
    const lesson = await this.findOne(id);
    Object.assign(lesson, updateLessonInput);
    return await this.lessonsRepository.save(lesson);
  }

  async remove(id: number): Promise<boolean> {
    const lesson = await this.findOne(id);
    lesson.isActive = false;
    await this.lessonsRepository.save(lesson);
    return true;
  }

  async getNextOrderIndex(subjectId: number): Promise<number> {
    const lastLesson = await this.lessonsRepository.findOne({
      where: { subject: { id: subjectId }, isActive: true },
      order: { orderIndex: 'DESC' },
    });
    return lastLesson ? lastLesson.orderIndex + 1 : 1;
  }
}