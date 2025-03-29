import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/login-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginUserDto } from './dto/login-user.dto'; // Import LoginUserDto

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() loginUserDto: LoginUserDto) { //Потом посмотреть что тут светит toDo
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}