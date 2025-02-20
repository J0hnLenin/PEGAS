import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './achievement.entity';
import { UserService } from '../user/user.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';

@Injectable()
export class AchievementService {
  constructor(
    @InjectRepository(Achievement)
    private achievementRepository: Repository<Achievement>,
    private userService: UserService,
  ) {}

  async createAchievement(createAchievementDto: CreateAchievementDto): Promise<Achievement> {
    const user = await this.userService.findUserById(createAchievementDto.userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${createAchievementDto.userId} not found`);
    }

    const achievement = this.achievementRepository.create({
      name: createAchievementDto.name,
      description: createAchievementDto.description,
      user: user,
    });

    return this.achievementRepository.save(achievement);
  }

  async findAchievementsByUserId(userId: number): Promise<Achievement[]> {
    return this.achievementRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }
}