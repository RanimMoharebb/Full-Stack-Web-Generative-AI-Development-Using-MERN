import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { userGender } from 'src/common/enums/user.gender.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: ' name is required' })
  @MinLength(2, { message: ' name min length is 2' })
  @MaxLength(50, { message: ' name max length is 50' })
  @IsString()
  @Type(() => String)
  name: string;

  @IsNumber()
  @Min(20)
  @Max(50)
  @Type(() => Number)
  age: number;

  @IsString()
  gender: userGender;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
