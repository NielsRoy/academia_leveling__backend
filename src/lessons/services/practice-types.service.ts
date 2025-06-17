// src/lessons/services/practice-types.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PracticeType } from '../entities/practice-type.entity';

@Injectable()
export class PracticeTypesService {
  constructor(
    @InjectRepository(PracticeType)
    private readonly practiceTypesRepository: Repository<PracticeType>,
  ) {}

  async findAll(): Promise<PracticeType[]> {
    return await this.practiceTypesRepository.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });
  }

  async findOne(id: number): Promise<PracticeType> {
    const practiceType = await this.practiceTypesRepository.findOne({
      where: { id, isActive: true },
    });
    if (!practiceType) {
      throw new NotFoundException(`Practice type with id ${id} not found`);
    }
    return practiceType;
  }

  async findByCode(code: string): Promise<PracticeType> {
    const practiceType = await this.practiceTypesRepository.findOne({
      where: { code, isActive: true },
    });
    if (!practiceType) {
      throw new NotFoundException(`Practice type with code ${code} not found`);
    }
    return practiceType;
  }
}