import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AchievementModule } from './achievement/achievement.module';
import { StudentModule } from "./student/student.module";
import { ContestModule } from "./contest/contest.module";

@Module({
  imports: [
  /*
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  */
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'test',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AchievementModule,
    StudentModule,
    ContestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
