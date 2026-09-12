import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Ahmed',
      lastName: 'Ali',
      age: 22,
      password: '123456',
      email: 'ahmed@gmail.com',
      courses: ['NestJS'],
    },
  ];

  private currentId = 2;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  create(user: Omit<User, 'id'>): User {
    const emailExists = this.users.find(
      (u) => u.email === user.email,
    );

    if (emailExists) {
      throw new BadRequestException('Email already exists');
    }

    const newUser: User = {
      id: this.currentId++,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  remove(id: number) {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    this.users = this.users.filter((u) => u.id !== id);

    return {
      message: 'Deleted Successfully',
    };
  }
}