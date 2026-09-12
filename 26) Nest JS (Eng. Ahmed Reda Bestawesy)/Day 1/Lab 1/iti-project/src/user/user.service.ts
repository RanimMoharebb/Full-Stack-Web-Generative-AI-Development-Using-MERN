import { Injectable } from '@nestjs/common';
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

  findOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(user: Omit<User, 'id'>): User {
    const emailExists = this.users.find(
      (u) => u.email === user.email,
    );

    if (emailExists) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: this.currentId++,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  remove(id: number) {
    this.users = this.users.filter(
      (u) => u.id !== id,
    );

    return {
      message: 'Deleted Successfully',
    };
  }
}