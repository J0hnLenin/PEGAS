import { TypeOrmModule } from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {Application} from "./entities/application.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
})
export class ApplicationModule {}