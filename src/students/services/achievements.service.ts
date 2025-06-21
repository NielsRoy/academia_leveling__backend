import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Achievement } from '../entities/achievement.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AchievementsService {

  constructor(
    @InjectRepository(Achievement)
    private readonly achievmentRepository: Repository<Achievement>
  ) {}

  // create(createAchievementInput: CreateAchievementInput) {
  //   return 'This action adds a new achievement';
  // }

  async findAll(): Promise<Achievement[]> {
    return await this.achievmentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }

  // update(id: number, updateAchievementInput: UpdateAchievementInput) {
  //   return `This action updates a #${id} achievement`;
  // }

  remove(id: number) {
    return `This action removes a #${id} achievement`;
  }
}
