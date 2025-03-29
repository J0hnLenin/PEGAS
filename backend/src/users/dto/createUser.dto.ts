import { IsString, IsNotEmpty, MinLength, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;


  @IsEmail()
  @IsOptional()
  email: string;
}