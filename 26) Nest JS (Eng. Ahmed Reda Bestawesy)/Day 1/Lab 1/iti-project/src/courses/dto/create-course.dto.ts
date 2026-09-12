import {
  IsString,
  IsNumber,
  IsArray,
  IsInt,
  Min,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(0)
  grade!: number;

  @IsArray()
  @IsInt({ each: true })
  students!: number[];
}