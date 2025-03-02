import { IsDate, IsNumber, IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateAchievementDto {
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsNumber()
  @IsNotEmpty()
  category: number;

  @IsNumber()
  @IsNotEmpty()
  typeAchievement: number;

  @IsNumber()
  @IsNotEmpty()
  level: number;
  
  @IsNumber()
  @IsNotEmpty()
  student: number;

}
