import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { ContestService } from './contest.service';
import { CreateContestDto } from './dto/create-contest.dto';
import { Contest } from "./entity/contest.entity";

@Controller('contest')
export class ContestController {
  constructor(private readonly contestService: ContestService) {}

}
