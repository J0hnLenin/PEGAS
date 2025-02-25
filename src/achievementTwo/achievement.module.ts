import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';
import { Achievement } from './entity/achievement.entity';
import { Category } from './entity/category.entity';
import { TypeAchievement  } from './entity/typeAchievement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement, Category, TypeAchievement])],
  controllers: [AchievementController],
  providers: [AchievementService],
  exports: [AchievementService],
})
export class AchievementModule {}
