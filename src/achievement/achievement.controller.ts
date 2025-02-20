import { Controller, Post, Get, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import {Achievement} from "./achievement.entity";

@Controller('achievements')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createAchievement(@Body() createAchievementDto: CreateAchievementDto): Promise<Achievement> {
    return this.achievementService.createAchievement(createAchievementDto);
  }

  @Get(':userId')
  async findAchievementsByUserId(@Param('userId') userId: string): Promise<Achievement[]> {
    return this.achievementService.findAchievementsByUserId(Number(userId));
  }
}