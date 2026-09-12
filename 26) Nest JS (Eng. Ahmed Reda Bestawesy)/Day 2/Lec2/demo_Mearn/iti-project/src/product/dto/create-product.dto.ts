import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'name is required' })
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Min(1)
  @Max(50, { message: 'number must not exceed 50' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'quantity must be number' })
  quantity: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'array must be not empty' })
  @IsString({ each: true, message: 'elements need to be string' })
  items: string[];

  @IsArray()
  @ArrayMinSize(1, { message: 'array must be not empty' })
  @IsInt({ each: true, message: 'elements need to be number' })
  @IsOptional()
  userIds: number[];
}
