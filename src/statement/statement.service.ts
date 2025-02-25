import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Statement } from './entity/statement.entity';
import { CreateStatementDto } from './dto/create-statement.dto';

@Injectable()
export class StatementService {
  constructor(
    @InjectRepository(Statement)
    private statementRepository: Repository<Statement>,
  ) {}

}
