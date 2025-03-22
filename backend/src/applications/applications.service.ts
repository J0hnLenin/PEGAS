import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Application} from './entities/application.entity';
import {ApplicationDTO} from "./dto/application_user.dto";
import {plainToClass} from 'class-transformer';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  async getApplicationsWithAchievementCount(
      limit: number = 10,
      offset: number = 0): Promise<ApplicationDTO[]> {
    const applications = await this.applicationsRepository
        .createQueryBuilder('application')
        .skip(offset)
        .take(limit)
        .loadRelationCountAndMap('application.achievementCount', 'application.achievements')
        .leftJoinAndSelect('application.studentBook', 'studentBook')
        .leftJoinAndSelect('application.status', 'status')
        .leftJoinAndSelect('studentBook.user', 'user')
        .getMany();

    return applications.map(application => {
      return plainToClass(ApplicationDTO, application)
    });

  }
}