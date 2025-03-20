import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { Achievement } from '../achievements/entities/achievement.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  async getApplicationsWithAchievementCount(
      limit: number = 10,
      offset: number = 0): Promise<
    { application: Application}[]
  > {
    const applications = await this.applicationsRepository
      .createQueryBuilder('application')
      .loadRelationCountAndMap('application.achievementCount', 'application.achievements')
      .skip(offset)
      .take(limit)
      .getMany();

    return applications.map(application => ({
      application: application,
    }));
  }
}