import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AchievementModule } from './achievement/achievement.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AchievementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
