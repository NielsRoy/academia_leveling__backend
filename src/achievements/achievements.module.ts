import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsResolver } from './achievements.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achievement } from './entities/achievement.entity';

@Module({
  providers: [AchievementsResolver, AchievementsService],
  imports: [
    TypeOrmModule.forFeature([Achievement]),
  ],
})
export class AchievementsModule {}
