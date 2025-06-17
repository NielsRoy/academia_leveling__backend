// src/lessons/services/lesson-steps.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonStep } from '../entities/lesson-step.entity';
import { Lesson } from '../entities/lesson.entity';
import { CreateLessonStepInput } from '../dto/create-lesson-step.input';
import { UpdateLessonStepInput } from '../dto/update-lesson-step.input';

@Injectable()
export class LessonStepsService {
  constructor(
    @InjectRepository(LessonStep)
    private readonly lessonStepsRepository: Repository<LessonStep>,
  ) {}

  async create(createLessonStepInput: CreateLessonStepInput, lesson: Lesson): Promise<LessonStep> {
    const newLessonStep = this.lessonStepsRepository.create({
      ...createLessonStepInput,
      lesson,
    });
    return await this.lessonStepsRepository.save(newLessonStep);
  }

  async findAllByLesson(lesson: Lesson): Promise<LessonStep[]> {
    return await this.lessonStepsRepository.find({
      where: { lesson: { id: lesson.id } },
      order: { stepNumber: 'ASC' },
    });
  }

  async findOne(id: number): Promise<LessonStep> {
    const step = await this.lessonStepsRepository.findOne({
      where: { id },
    });
    if (!step) {
      throw new NotFoundException(`Lesson step with id ${id} not found`);
    }
    return step;
  }

  async findByLessonAndStep(lessonId: number, stepNumber: number): Promise<LessonStep> {
    const step = await this.lessonStepsRepository.findOne({
      where: { lesson: { id: lessonId }, stepNumber },
    });
    if (!step) {
      throw new NotFoundException(`Step ${stepNumber} for lesson ${lessonId} not found`);
    }
    return step;
  }

  async update(id: number, updateLessonStepInput: UpdateLessonStepInput): Promise<LessonStep> {
    const step = await this.findOne(id);
    Object.assign(step, updateLessonStepInput);
    return await this.lessonStepsRepository.save(step);
  }

  async remove(id: number): Promise<boolean> {
    await this.lessonStepsRepository.delete(id);
    return true;
  }
}