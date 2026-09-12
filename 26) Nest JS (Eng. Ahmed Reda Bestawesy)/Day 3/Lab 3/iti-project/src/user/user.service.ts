import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  // =========================
  // GET ALL USERS (WITH RELATION)
  // =========================
  findAll() {
    return this.userModel.find().populate('courses');
  }

  // =========================
  // FIND ONE USER
  // =========================
  async findOne(id: string) {
    const user = await this.userModel
      .findById(id)
      .populate('courses');

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  // =========================
  // FIND BY EMAIL (FOR LOGIN)
  // =========================
  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  // =========================
  // CREATE USER (SIGNUP)
  // =========================
  async create(userDto: any) {
    const exists = await this.userModel.findOne({
      email: userDto.email,
    });

    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    const newUser = new this.userModel({
      ...userDto,
      role: 'user', // IMPORTANT for RolesGuard
      courses: [],
    });

    return newUser.save();
  }

  // =========================
  // DELETE USER
  // =========================
  async remove(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userModel.findByIdAndDelete(id);

    return {
      message: 'Deleted Successfully',
    };
  }
}