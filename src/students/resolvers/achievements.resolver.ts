import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AchievementsService } from '../services/achievements.service';
import { Achievement } from '../entities/achievement.entity';

@Resolver(() => Achievement)
export class AchievementsResolver {
  constructor(private readonly achievementsService: AchievementsService) {}

  // @Mutation(() => Achievement)
  // createAchievement(@Args('createAchievementInput') createAchievementInput: CreateAchievementInput) {
  //   return this.achievementsService.create(createAchievementInput);
  // }

  @Query(() => [Achievement], { name: 'achievements' })
  findAll() {
    return this.achievementsService.findAll();
  }

  // @Query(() => Achievement, { name: 'achievement' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.achievementsService.findOne(id);
  // }

  // @Mutation(() => Achievement)
  // updateAchievement(@Args('updateAchievementInput') updateAchievementInput: UpdateAchievementInput) {
  //   return this.achievementsService.update(updateAchievementInput.id, updateAchievementInput);
  // }

  // @Mutation(() => Achievement)
  // removeAchievement(@Args('id', { type: () => Int }) id: number) {
  //   return this.achievementsService.remove(id);
  // }
}
