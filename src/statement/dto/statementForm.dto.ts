import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class StatementFormDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (value === "") { return null; }
    return Number(value);
  })
  achievements: number | null;
  
  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (value === "") { return null; }
    return value;
  })
  name: string | null;
  
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  status: number;
  
  optionSort: string;
  
  @Transform(({ value }) => {
    switch (typeof value){
      case "string":
        return [ Number(value) ];
        break;
      case "object":
        return value.map((item) => { return Number(item); });
        break;
      default:
        break;
    }
  })
  optionStatus: number[] | undefined; 
}
