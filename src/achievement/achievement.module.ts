import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';
import { Achievement } from './achievement.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement]), UserModule],
  controllers: [AchievementController],
  providers: [AchievementService],
})
export class AchievementModule {}
