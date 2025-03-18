import { TypeOrmModule } from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {Achievement} from "./entities/achievement.entity";
import {Category} from "./entities/category.entity";
import {Status} from "./entities/status.entity";
//import {TypeOfAchievements} from "./entities/typeOfAchievements.entity"; toDo

@Module({
  imports: [TypeOrmModule.forFeature([Achievement, Category, Status])],
})
export class AchievementsModule {}