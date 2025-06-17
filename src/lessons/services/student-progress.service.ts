// src/lessons/services/student-progress.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentLessonProgress } from '../entities/student-lesson-progress.entity';
import { StudentStepProgress } from '../entities/student-step-progress.entity';
import { StudentDoExercise } from '../entities/student-do-exercise.entity';
import { Student } from '../../students/entities/student.entity';
import { Lesson } from '../entities/lesson.entity';
import { LessonStep } from '../entities/lesson-step.entity';
import { Exercise } from '../entities/exercise.entity';
import { CompleteExerciseInput } from '../dto/complete-exercise.input';

@Injectable()
export class StudentProgressService {
  constructor(
    @InjectRepository(StudentLessonProgress)
    private readonly studentLessonProgressRepository: Repository<StudentLessonProgress>,
    @InjectRepository(StudentStepProgress)
    private readonly studentStepProgressRepository: Repository<StudentStepProgress>,
    @InjectRepository(StudentDoExercise)
    private readonly studentDoExerciseRepository: Repository<StudentDoExercise>,
  ) {}

  async getLessonProgress(student: Student, lesson: Lesson): Promise<StudentLessonProgress> {
    let progress = await this.studentLessonProgressRepository.findOne({
      where: { student: { id: student.id }, lesson: { id: lesson.id } },
    });

    if (!progress) {
      // Crear progreso inicial si no existe
      progress = this.studentLessonProgressRepository.create({
        student,
        lesson,
        isUnlocked: false,
        isCompleted: false,
        currentStep: 1,
        completionPercentage: 0,
        totalPointsEarned: 0,
      });
      progress = await this.studentLessonProgressRepository.save(progress);
    }

    return progress;
  }

  async getStepProgress(student: Student, lessonStep: LessonStep): Promise<StudentStepProgress> {
    let progress = await this.studentStepProgressRepository.findOne({
      where: { student: { id: student.id }, lessonStep: { id: lessonStep.id } },
    });

    if (!progress) {
      progress = this.studentStepProgressRepository.create({
        student,
        lessonStep,
        isCompleted: false,
        exercisesCompleted: 0,
        totalExercises: 0,
        pointsEarned: 0,
      });
      progress = await this.studentStepProgressRepository.save(progress);
    }

    return progress;
  }

  async completeExercise(
    student: Student,
    exercise: Exercise,
    completeExerciseInput: CompleteExerciseInput
  ): Promise<StudentDoExercise> {
    const { selectedOptions, timeSpentSeconds } = completeExerciseInput;
    
    // Obtener número de intento
    const lastAttempt = await this.studentDoExerciseRepository.findOne({
      where: { student: { id: student.id }, exercise: { id: exercise.id } },
      order: { attemptNumber: 'DESC' },
    });
    
    const attemptNumber = lastAttempt ? lastAttempt.attemptNumber + 1 : 1;
    
    // Verificar respuesta (simplificado, aquí necesitarías lógica más compleja)
    const isCorrect = await this.verifyExerciseAnswer(exercise.id, selectedOptions);
    
    // Calcular puntos
    const pointsEarned = isCorrect ? 
      Math.floor(exercise.basePoints * (await exercise.difficultyLevel).pointsMultiplier) : 0;
    
    const attempt = this.studentDoExerciseRepository.create({
      student,
      exercise,
      attemptNumber,
      selectedOptions: JSON.stringify(selectedOptions),
      isCorrect,
      pointsEarned,
      timeSpentSeconds,
      errors: isCorrect ? 0 : 1,
    });
    
    const savedAttempt = await this.studentDoExerciseRepository.save(attempt);
    
    // Actualizar progreso si es correcto
    if (isCorrect) {
      await this.updateProgressAfterExercise(student, exercise, pointsEarned);
    }
    
    return savedAttempt;
  }

  private async verifyExerciseAnswer(exerciseId: number, selectedOptions: number[]): Promise<boolean> {
    // Aquí deberías implementar la lógica de verificación según el tipo de ejercicio
    // Por ahora retornamos true como placeholder
    return true;
  }

  private async updateProgressAfterExercise(student: Student, exercise: Exercise, pointsEarned: number): Promise<void> {
    const lessonStep = await exercise.lessonStep;
    const lesson = await lessonStep.lesson;
    
    // Actualizar progreso del step
    const stepProgress = await this.getStepProgress(student, lessonStep);
    stepProgress.exercisesCompleted += 1;
    stepProgress.pointsEarned += pointsEarned;
    await this.studentStepProgressRepository.save(stepProgress);
    
    // Actualizar progreso de la lección
    const lessonProgress = await this.getLessonProgress(student, lesson);
    lessonProgress.totalPointsEarned += pointsEarned;
    lessonProgress.lastAccessedAt = new Date();
    await this.studentLessonProgressRepository.save(lessonProgress);
  }

  async getStudentExerciseAttempts(student: Student, exercise: Exercise): Promise<StudentDoExercise[]> {
    return await this.studentDoExerciseRepository.find({
      where: { student: { id: student.id }, exercise: { id: exercise.id } },
      order: { attemptNumber: 'DESC' },
    });
  }
}