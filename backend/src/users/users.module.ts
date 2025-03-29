import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {Module, Global} from "@nestjs/common";
import {Role} from "./entities/role.entity";
import {Permission} from "./entities/permission.entity";


import { DiscoveryModule } from '@nestjs/core';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Permission],),
      DiscoveryModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}