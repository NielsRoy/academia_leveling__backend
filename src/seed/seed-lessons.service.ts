// src/seed/seed-lessons.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PracticeType } from '../lessons/entities/practice-type.entity';
import { DifficultyLevel } from '../lessons/entities/difficulty-level.entity';
import { Lesson } from '../lessons/entities/lesson.entity';
import { LessonStep } from '../lessons/entities/lesson-step.entity';
import { Exercise } from '../lessons/entities/exercise.entity';
import { ExerciseOption } from '../lessons/entities/exercise-option.entity';
import { Subject } from '../subjects/entities/subject.entity';
import { LessonType, DifficultyLevelEnum } from '../lessons/entities/lesson.entity';

@Injectable()
export class SeedLessonsService {
  constructor(
    @InjectRepository(PracticeType)
    private readonly practiceTypeRepository: Repository<PracticeType>,
    @InjectRepository(DifficultyLevel)
    private readonly difficultyLevelRepository: Repository<DifficultyLevel>,
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(LessonStep)
    private readonly lessonStepRepository: Repository<LessonStep>,
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>,
    @InjectRepository(ExerciseOption)
    private readonly exerciseOptionRepository: Repository<ExerciseOption>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async seedPracticeTypes(): Promise<void> {
    const practiceTypes = [
      {
        code: 'multiple_choice',
        name: 'Opción Múltiple',
        description: 'Preguntas con incisos y una opción correcta',
        isActive: true,
      },
      {
        code: 'multiple_select',
        name: 'Selección Múltiple', 
        description: 'Seleccionar las opciones correctas',
        isActive: true,
      },
      {
        code: 'order_items',
        name: 'Ordenar Elementos',
        description: 'Ordenar los incisos correctamente',
        isActive: true,
      },
      {
        code: 'match_pairs',
        name: 'Emparejar',
        description: 'Armar pares correctos',
        isActive: true,
      },
    ];

    for (const typeData of practiceTypes) {
      const existingType = await this.practiceTypeRepository.findOne({
        where: { code: typeData.code },
      });

      if (!existingType) {
        const practiceType = this.practiceTypeRepository.create(typeData);
        await this.practiceTypeRepository.save(practiceType);
        console.log(`✅ Practice type '${typeData.name}' created`);
      }
    }
  }

  async seedDifficultyLevels(): Promise<void> {
    const difficultyLevels = [
      {
        code: 'facil',
        name: 'Fácil',
        pointsMultiplier: 1.0,
        color: '#4CAF50',
        orderIndex: 1,
      },
      {
        code: 'medio',
        name: 'Medio',
        pointsMultiplier: 1.5,
        color: '#FF9800',
        orderIndex: 2,
      },
      {
        code: 'avanzado',
        name: 'Avanzado',
        pointsMultiplier: 2.0,
        color: '#F44336',
        orderIndex: 3,
      },
      {
        code: 'profesional',
        name: 'Profesional',
        pointsMultiplier: 3.0,
        color: '#9C27B0',
        orderIndex: 4,
      },
    ];

    for (const levelData of difficultyLevels) {
      const existingLevel = await this.difficultyLevelRepository.findOne({
        where: { code: levelData.code },
      });

      if (!existingLevel) {
        const difficultyLevel = this.difficultyLevelRepository.create(levelData);
        await this.difficultyLevelRepository.save(difficultyLevel);
        console.log(`✅ Difficulty level '${levelData.name}' created`);
      }
    }
  }

  async seedSampleLessons(): Promise<void> {
    // Buscar una materia existente (asumiendo que ya hay materias en la BD)
    const subject = await this.subjectRepository.findOne({
      where: { isActive: true },
    });

    if (!subject) {
      console.log('❌ No subjects found. Please create subjects first.');
      return;
    }

    // Buscar tipos de práctica
    const multipleChoiceType = await this.practiceTypeRepository.findOne({
      where: { code: 'multiple_choice' },
    });
    const difficultyEasy = await this.difficultyLevelRepository.findOne({
      where: { code: 'facil' },
    });

    if (!multipleChoiceType || !difficultyEasy) {
      console.log('❌ Practice types or difficulty levels not found');
      return;
    }

    // Crear lección de ejemplo
    const sampleLesson = this.lessonRepository.create({
      title: 'Introducción a los números enteros',
      description: 'Aprende qué son los números enteros y cómo identificarlos',
      orderIndex: 1,
      xpReward: 30,
      estimatedDurationMinutes: 15,
      difficultyLevel: DifficultyLevelEnum.FACIL,
      lessonType: LessonType.LESSON,
      isActive: true,
      subject: subject,
    });

    const savedLesson = await this.lessonRepository.save(sampleLesson);
    console.log(`✅ Sample lesson '${savedLesson.title}' created`);

    // Crear los 3 pasos de la lección
    const steps = [
      {
        stepNumber: 1,
        title: '¿Qué son los números enteros?',
        theoryContent: `Los números enteros son todos los números que no tienen parte decimal. 
        Incluyen:
        - Los números positivos: 1, 2, 3, 4, 5...
        - El cero: 0
        - Los números negativos: -1, -2, -3, -4, -5...
        
        Se representan con el símbolo ℤ (zeta).`,
        imageUrl: null,
      },
      {
        stepNumber: 2,
        title: 'La recta numérica',
        theoryContent: `Los números enteros se pueden representar en una recta numérica:
        
        Los números negativos están a la izquierda del cero.
        Los números positivos están a la derecha del cero.
        El cero es el centro de la recta.`,
        imageUrl: '/assets/images/number-line.png',
      },
      {
        stepNumber: 3,
        title: 'Aplicaciones de los números enteros',
        theoryContent: `Los números enteros se usan en la vida diaria:
        - Temperaturas (5°C, -10°C)
        - Altitudes (sobre y bajo el nivel del mar)
        - Pisos de edificios (sótano -1, planta baja 0, primer piso 1)
        - Cuentas bancarias (deudas y ahorros)`,
        imageUrl: null,
      },
    ];

    for (const stepData of steps) {
      const step = this.lessonStepRepository.create({
        ...stepData,
        lesson: savedLesson,
      });
      const savedStep = await this.lessonStepRepository.save(step);
      console.log(`✅ Step ${stepData.stepNumber} created for lesson`);

      // Crear ejercicio de ejemplo para cada paso
      const exercise = this.exerciseRepository.create({
        title: `Práctica del paso ${stepData.stepNumber}`,
        statement: `¿Cuál de los siguientes es un número entero?`,
        hint: 'Recuerda que los números enteros no tienen decimales',
        orderIndex: 1,
        basePoints: 10,
        timeLimitSeconds: 60,
        maxAttempts: 3,
        isActive: true,
        lessonStep: savedStep,
        practiceType: multipleChoiceType,
        difficultyLevel: difficultyEasy,
      });

      const savedExercise = await this.exerciseRepository.save(exercise);

      // Crear opciones para el ejercicio
      const options = [
        { optionText: '5', isCorrect: true, orderIndex: 1, explanation: 'Correcto! 5 es un número entero positivo' },
        { optionText: '3.14', isCorrect: false, orderIndex: 2, explanation: 'Incorrecto. 3.14 tiene decimales, no es entero' },
        { optionText: '1/2', isCorrect: false, orderIndex: 3, explanation: 'Incorrecto. 1/2 es una fracción, no un entero' },
        { optionText: '-7', isCorrect: true, orderIndex: 4, explanation: 'Correcto! -7 es un número entero negativo' },
      ];

      for (const optionData of options) {
        const option = this.exerciseOptionRepository.create({
          ...optionData,
          exercise: savedExercise,
        });
        await this.exerciseOptionRepository.save(option);
      }
      
      console.log(`✅ Exercise with options created for step ${stepData.stepNumber}`);
    }
  }

  async runSeed(): Promise<void> {
    console.log('🌱 Starting lessons seed...');
    
    try {
      await this.seedPracticeTypes();
      await this.seedDifficultyLevels();
      await this.seedSampleLessons();
      
      console.log('🎉 Lessons seed completed successfully!');
    } catch (error) {
      console.error('❌ Error during lessons seed:', error);
      throw error;
    }
  }
}