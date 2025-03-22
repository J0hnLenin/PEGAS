import { TypeOrmModule } from '@nestjs/typeorm';
import {Module, Get, Query} from "@nestjs/common";
import {Application} from "./entities/application.entity";
import {ApplicationsService} from "./applications.service";
import {ApplicationsController} from "./applications.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {


}