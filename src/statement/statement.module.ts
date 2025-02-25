import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatementController } from './statement.controller';
import { StatementService } from './statement.service';
import { Statement } from './entity/statement.entity';
import { Status } from './entity/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Statement, Status])],
  controllers: [StatementController],
  providers: [StatementService],
  exports: [StatementService],
})
export class StatementModule {}
