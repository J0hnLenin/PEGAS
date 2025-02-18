import { Controller, Get, Post, Body } from '@nestjs/common';

interface User {
  name: string;
  age?: number; // Опциональное поле
}

@Controller('users')
export class UsersController {
  private users: User[] = []; // Теперь массив имеет тип User[]

  @Get()
  getUsers(): User[] {
    return this.users;
  }

  @Post()
  createUser(@Body() user: User): User {
    this.users.push(user); // Теперь ошибки нет
    return user;
  }
}
