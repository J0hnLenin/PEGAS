import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestController } from './contest.controller';
import { ContestService } from './contest.service';
import { Contest } from './entity/contest.entity';
import { Organization } from './entity/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contest, Organization])],
  controllers: [ContestController],
  providers: [ContestService],
  exports: [ContestService],
})
export class ContestModule {}
