import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contest } from './entity/contest.entity';
import { CreateContestDto } from './dto/create-contest.dto';

@Injectable()
export class ContestService {
  constructor(
    @InjectRepository(Contest)
    private contestRepository: Repository<Contest>,
  ) {}

}
