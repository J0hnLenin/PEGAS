import { IsDate, IsNumber, IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateStatementDto {
  @IsNumber()
  @IsNotEmpty()
  student: number;

  @IsNumber()
  @IsNotEmpty()
  contest: number;

  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

}
