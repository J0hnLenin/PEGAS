import { TypeOrmModule } from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {Role} from "./entities/role.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
})
export class RolesModule {}