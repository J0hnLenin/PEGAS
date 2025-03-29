import { Controller, Post, UseInterceptors, ClassSerializerInterceptor, Body, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import {User} from './entities/user.entity';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
     @UsePipes(new ValidationPipe())
     @HttpCode(HttpStatus.CREATED)
     async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
       return this.usersService.createUser(createUserDto);
     }
}