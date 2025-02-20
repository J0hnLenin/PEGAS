import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Achievement } from '../achievement/achievement.entity';
import { User } from "./user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto.firstName, createUserDto.lastName);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    const userId = Number(id);
    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return user;
  }
  @Get()
    async findAllUsersWithAchievementCount(): Promise<User[]> {
      return this.userService.findAllUsersWithAchievementCount();
    }
}