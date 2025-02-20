// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(firstName: string, lastName: string): Promise<User> {
    const user = this.userRepository.create({ firstName, lastName });
    return this.userRepository.save(user);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
  async findAllUsersWithAchievementCount(): Promise<User[]> {
      return this.userRepository
        .createQueryBuilder('user')
        .leftJoin('user.achievements', 'achievement')
        .loadRelationCountAndMap('user.achievementCount', 'user.achievements')
        .getMany();
    }
}