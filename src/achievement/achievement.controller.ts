import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { Achievement } from "./entity/achievement.entity";

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

}
