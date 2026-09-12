import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  // BadRequestException,
  // NotAcceptableException,
  // UnauthorizedException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() data: any, @Query('name') name: string) {
    console.log(data);
    console.log(name);
    if (name) {
      return `hello ${name}`;
    }
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory: () => {
          return new HttpException('id must be number', HttpStatus.BAD_REQUEST);
          // return new BadRequestException();
          // return new NotAcceptableException();
          // return new UnauthorizedException();
        },
      }),
    )
    id: number,
  ) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
