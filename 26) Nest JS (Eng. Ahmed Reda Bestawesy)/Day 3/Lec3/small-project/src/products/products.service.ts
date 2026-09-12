/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProductsService {
  constructor(
    private userService: UsersService,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto, user: any) {
    try {
      createProductDto.createdBy = user;
      const product = await this.productModel.create(createProductDto);
      await this.userService.updateOne(user?.['_id'], product);
      return 'This action adds a new product';
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error?.['errorResponse']['errmsg'],
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.productModel
      .find()
      .populate('createdBy', { name: 1, age: 1, gender: 1 });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
