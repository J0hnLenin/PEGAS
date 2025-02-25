import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { StatementService } from './statement.service';
import { CreateStatementDto } from './dto/create-statement.dto';
import { Statement } from "./entity/statement.entity";

@Controller('statement')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

}
