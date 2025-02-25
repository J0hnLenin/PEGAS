import { IsNumber, IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  reason: number;

  @IsString()
  @IsNotEmpty()
  subdivison: string;
  
  @IsString()
  @IsNotEmpty()
  direction: string;

  @IsNumber()
  @IsNotEmpty()
  course: number;

  @IsNumber()
  @IsNotEmpty()
  period: number;
  
}
