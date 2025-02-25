import { IsDate, IsNumber, IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateContestDto {
  @IsNumber()
  @IsNotEmpty()
  organization: number;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  finishDate: Date;

  @IsString()
  @IsNotEmpty()
  directions: string; 

}
