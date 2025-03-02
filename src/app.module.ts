import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from "./student/student.module";
import { ContestModule } from "./contest/contest.module";
import { AchievementModule } from "./achievementTwo/achievement.module";
import { StatementModule } from "./statement/statement.module";

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

    /*TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'test',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }), */
    //UserModule,
    //AchievementModule,
    StudentModule,
    ContestModule,
    AchievementModule,
    StatementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
