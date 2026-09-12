import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  private courses = [
    {
      name: 'NestJS',
      grade: 100,
      students: [1],
    },
  ];

  create(createCourseDto: CreateCourseDto) {
    const exists = this.courses.find(
      (c) => c.name === createCourseDto.name,
    );

    if (exists) {
      throw new BadRequestException('Course already exists');
    }

    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  findAll() {
    return this.courses;
  }

  findOne(name: string) {
    const course = this.courses.find(
      (c) => c.name === name,
    );

    if (!course) {
      throw new NotFoundException(`Course ${name} not found`);
    }

    return course;
  }

  update(name: string, updateCourseDto: UpdateCourseDto) {
    const course = this.courses.find(
      (c) => c.name === name,
    );

    if (!course) {
      throw new NotFoundException(`Course ${name} not found`);
    }

    Object.assign(course, updateCourseDto);

    return course;
  }

  remove(name: string) {
    const course = this.courses.find(
      (c) => c.name === name,
    );

    if (!course) {
      throw new NotFoundException(`Course ${name} not found`);
    }

    this.courses = this.courses.filter(
      (c) => c.name !== name,
    );

    return {
      message: 'Deleted Successfully',
    };
  }
}