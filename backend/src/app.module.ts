import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentBooksModule } from './studentbooks/studentbooks.module';
import { ApplicationsModule } from "./applications/applications.module";
import { AchievementsModule } from "./achievements/achievements.module";
import {CompetitionModule} from "./competition/competitionModule";
import { ConfigModule } from '@nestjs/config';
import * as process from "node:process";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
          envFilePath: '.env-example',
          isGlobal: true,
    }),
    StudentBooksModule,
    AchievementsModule,
    CompetitionModule,
    ApplicationsModule,
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT?? '5432', 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
