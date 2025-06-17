// src/lessons/services/difficulty-levels.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DifficultyLevel } from '../entities/difficulty-level.entity';

@Injectable()
export class DifficultyLevelsService {
  constructor(
    @InjectRepository(DifficultyLevel)
    private readonly difficultyLevelsRepository: Repository<DifficultyLevel>,
  ) {}

  async findAll(): Promise<DifficultyLevel[]> {
    return await this.difficultyLevelsRepository.find({
      order: { orderIndex: 'ASC' },
    });
  }

  async findOne(id: number): Promise<DifficultyLevel> {
    const difficultyLevel = await this.difficultyLevelsRepository.findOne({
      where: { id },
    });
    if (!difficultyLevel) {
      throw new NotFoundException(`Difficulty level with id ${id} not found`);
    }
    return difficultyLevel;
  }

  async findByCode(code: string): Promise<DifficultyLevel> {
    const difficultyLevel = await this.difficultyLevelsRepository.findOne({
      where: { code },
    });
    if (!difficultyLevel) {
      throw new NotFoundException(`Difficulty level with code ${code} not found`);
    }
    return difficultyLevel;
  }
}