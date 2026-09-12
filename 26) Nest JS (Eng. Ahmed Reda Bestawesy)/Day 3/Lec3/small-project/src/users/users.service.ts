import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Iuser } from 'src/common/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  // private users: Iuser[] = [];
  // static userInc: number = 0;
  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto');
    const saltOrRounds = 10;
    // const emailUniquness: User | null | undefined =
    //   await this.userModel.findOne({
    //     email: createUserDto.email,
    //   });
    // if (emailUniquness) {
    //   throw new HttpException('email already exist', HttpStatus.BAD_REQUEST);
    // }
    try {
      const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

      await this.userModel.create({ ...createUserDto, password: hash });
      // this.users.push({ ...createUserDto, id: ++UsersService.userInc });
      return 'This action adds a new user';
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error?.['errorResponse']['errmsg'],
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async login(createUserDto: CreateUserDto) {
    console.log('login');
    try {
      const user: User | null | undefined = await this.userModel.findOne({
        email: createUserDto.email,
      });
      if (!user) {
        throw new HttpException('email not exist', HttpStatus.BAD_REQUEST);
      }
      const hash = await bcrypt.compareSync(
        createUserDto.password,
        user.password,
      );
      if (!hash) {
        return new HttpException('password not exist', HttpStatus.BAD_REQUEST);
      }
      let userPayload = user?.['_doc'];
      delete userPayload.password;
      let accessToken = await this.jwtService.signAsync(userPayload);
      // this.users.push({ ...createUserDto, id: ++UsersService.userInc });
      return { ...user?.['_doc'], token: accessToken };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error?.['errorResponse']['errmsg'],
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().populate('products');
  }

  async findOne(id: string): Promise<User> {
    try {
      const user: User | null | undefined = await this.userModel
        .findOne({
          _id: id,
        })
        .populate('products', { name: 1, price: 1, quantity: 1 });
      // const user: Iuser | undefined = this.users.find((ele) => ele.id == id);
      if (!user) {
        throw new NotFoundException();
      }
      return user;
    } catch (error) {
      throw new HttpException('user not exist', HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  async updateOne(id: string, product: Product) {
    await this.userModel.updateOne({ _id: id }, { products: [product] });
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
