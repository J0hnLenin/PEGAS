import {Controller, Get, Post, Put, Delete, UseGuards} from "@nestjs/common";
import { UsersService } from "./users.service";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
}