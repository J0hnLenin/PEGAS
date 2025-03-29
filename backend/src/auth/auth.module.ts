import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './strategies/constants';
import { UsersModule } from '../users/users.module'; // Импортируйте UsersModule, если вам нужен доступ к сервису пользователей
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity'; //
import { LocalStrategy } from './strategies/local.strategy';
import {Permission} from "../users/entities/permission.entity";
import {DiscoveryModule} from "@nestjs/core";
import {AuthController} from "./auth.controller";

@Module({
  imports: [
    DiscoveryModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    TypeOrmModule.forFeature([User, Permission]),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService, JwtModule],
  controllers: [AuthController]
})
export class AuthModule {}