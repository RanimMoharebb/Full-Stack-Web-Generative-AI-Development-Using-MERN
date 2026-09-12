import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsArray,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  grade!: number;

  @IsArray()
  students!: string[];
}