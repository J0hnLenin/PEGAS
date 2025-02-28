import { Redirect, Controller, Post, Body, Get, Param, NotFoundException, Render } from '@nestjs/common';
import { StatementService } from './statement.service';
import { CreateStatementDto } from './dto/create-statement.dto';
import { Statement } from "./entity/statement.entity";
import { StatementFormDto } from './dto/statementForm.dto';

@Controller('statement')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

  @Get()
  @Redirect('/statementForm.html')
  sendForm() {
    return {};
  }

  @Post()
  async sendResponse(@Body() statementFormDto: StatementFormDto) : Promise<Statement[] | null> {
    return this.statementService.findStatement(statementFormDto);
  }

}
