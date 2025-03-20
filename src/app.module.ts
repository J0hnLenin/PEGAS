import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentBooksModule } from './studentbooks/studentbooks.module';
import { ApplicationsModule } from "./applications/applications.module";
import { AchievementsModule } from "./achievements/achievements.module";
import { RolesModule } from "./roles/roles.module";
import {CompetitionModule} from "./competition/competitionModule";

@Module({
  imports: [

    UsersModule,
    StudentBooksModule,
    AchievementsModule,
    RolesModule,
    CompetitionModule,
    ApplicationsModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'PEGAS',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
