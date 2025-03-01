import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Statement } from './entity/statement.entity';
import { CreateStatementDto } from './dto/create-statement.dto';
import { StatementFormDto } from './dto/statementForm.dto';

@Injectable()
export class StatementService {
  constructor(
    @InjectRepository(Statement)
    private statementRepository: Repository<Statement>,
  ) {}

  async findStatement(statementFormDto: StatementFormDto) : Promise<Statement[] | null> {
    const { achievements, name, status, optionSort, optionStatus } = statementFormDto;
    const queryBuilder = this.statementRepository
      .createQueryBuilder('statement')
      .leftJoinAndSelect('statement.student', 'student')
      .leftJoinAndSelect('statement.contest', 'contest')
      .leftJoinAndSelect('statement.status', 'status')
      .leftJoinAndSelect('student.achievements', 'achievement')
      .select([
        "student.name", 
        "statement.date", 
        "COUNT(achievement.id) as achievementCount", 
        "status.id"
      ])
      .groupBy('statement.id, statement.date, student.id, student.name, status.id');

    if (status !== 0){
      queryBuilder.andHaving("status.id = :status", { status });
    }

    if (name !== null){
      queryBuilder.andHaving("student.name LIKE :name", { name: `%${name}%` });
    }

    if (achievements !== null){
      queryBuilder.andHaving('COUNT(achievement.id) = :achievements', { achievements })
    }

    switch (optionSort){
      case "date":
        queryBuilder.orderBy('statement.date', 'DESC');
        break;
      case "name":
        queryBuilder.orderBy('student.name', 'ASC');
        break;
      case "countAchievement":
        queryBuilder.orderBy('achievementCount', 'DESC');
        break;
      case "status":
        queryBuilder.orderBy('status.id', 'ASC');
        break;
      default:
        break;
    }
    
    if (optionStatus !== undefined){
      queryBuilder.andWhere('status.id IN (:...optionStatus)', { optionStatus })    
    }

    const result = await queryBuilder.getRawMany();
    return result;
  }  

}
