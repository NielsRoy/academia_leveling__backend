// src/lessons/services/exercises.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../entities/exercise.entity';
import { ExerciseOption } from '../entities/exercise-option.entity';
import { LessonStep } from '../entities/lesson-step.entity';
import { CreateExerciseInput } from '../dto/create-exercise.input';
import { UpdateExerciseInput } from '../dto/update-exercise.input';
import { PracticeTypesService } from './practice-types.service';
import { DifficultyLevelsService } from './difficulty-levels.service';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,
    @InjectRepository(ExerciseOption)
    private readonly exerciseOptionsRepository: Repository<ExerciseOption>,
    private readonly practiceTypesService: PracticeTypesService,
    private readonly difficultyLevelsService: DifficultyLevelsService,
  ) {}

  async create(createExerciseInput: CreateExerciseInput, lessonStep: LessonStep): Promise<Exercise> {
    const { practiceTypeId, difficultyLevelId, options, ...exerciseData } = createExerciseInput;
    
    const practiceType = await this.practiceTypesService.findOne(practiceTypeId);
    const difficultyLevel = await this.difficultyLevelsService.findOne(difficultyLevelId);
    
    const orderIndex = await this.getNextOrderIndex(lessonStep.id);
    
    const newExercise = this.exercisesRepository.create({
      ...exerciseData,
      orderIndex,
      lessonStep,
      practiceType,
      difficultyLevel,
    });
    
    const savedExercise = await this.exercisesRepository.save(newExercise);
    
    // Crear las opciones
    if (options && options.length > 0) {
      const exerciseOptions = options.map((option, index) => 
        this.exerciseOptionsRepository.create({
          ...option,
          orderIndex: index + 1,
          exercise: savedExercise,
        })
      );
      await this.exerciseOptionsRepository.save(exerciseOptions);
    }
    
    return savedExercise;
  }

  async findAllByLessonStep(lessonStep: LessonStep): Promise<Exercise[]> {
    return await this.exercisesRepository.find({
      where: { lessonStep: { id: lessonStep.id }, isActive: true },
      order: { orderIndex: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Exercise> {
    const exercise = await this.exercisesRepository.findOne({
      where: { id, isActive: true },
    });
    if (!exercise) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }
    return exercise;
  }

  async update(id: number, updateExerciseInput: UpdateExerciseInput): Promise<Exercise> {
    const exercise = await this.findOne(id);
    const { practiceTypeId, difficultyLevelId, ...updateData } = updateExerciseInput;
    
    if (practiceTypeId) {
      exercise.practiceType = await this.practiceTypesService.findOne(practiceTypeId);
    }
    if (difficultyLevelId) {
      exercise.difficultyLevel = await this.difficultyLevelsService.findOne(difficultyLevelId);
    }
    
    Object.assign(exercise, updateData);
    return await this.exercisesRepository.save(exercise);
  }

  async remove(id: number): Promise<boolean> {
    const exercise = await this.findOne(id);
    exercise.isActive = false;
    await this.exercisesRepository.save(exercise);
    return true;
  }

  async getNextOrderIndex(lessonStepId: number): Promise<number> {
    const lastExercise = await this.exercisesRepository.findOne({
      where: { lessonStep: { id: lessonStepId }, isActive: true },
      order: { orderIndex: 'DESC' },
    });
    return lastExercise ? lastExercise.orderIndex + 1 : 1;
  }

  async findOptionsForExercise(exerciseId: number): Promise<ExerciseOption[]> {
    return await this.exerciseOptionsRepository.find({
      where: { exercise: { id: exerciseId } },
      order: { orderIndex: 'ASC' },
    });
  }
}