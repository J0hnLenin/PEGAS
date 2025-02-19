import { Controller, Get, Post, Body } from '@nestjs/common';


interface User {
  name: string;
  age?: number;
}

@Controller('users')
export class UsersController {
  private users: User[] = [];

  @Get()
  getUsers(): User[] {
    return this.users;
  }

  @Post()
  createUser(@Body() user: User): User {
    this.users.push(user);
    return user;
  }
}
