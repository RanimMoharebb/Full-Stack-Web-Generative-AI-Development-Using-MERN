import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: ' name is required' })
  @MinLength(2, { message: ' name min length is 2' })
  @MaxLength(50, { message: ' name max length is 50' })
  @IsString()
  @Type(() => String)
  name: string;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price: number;

  @IsNumber()
  @Min(0)
  @Max(50)
  @Type(() => Number)
  quantity: number;

  createdBy?: any;
}
