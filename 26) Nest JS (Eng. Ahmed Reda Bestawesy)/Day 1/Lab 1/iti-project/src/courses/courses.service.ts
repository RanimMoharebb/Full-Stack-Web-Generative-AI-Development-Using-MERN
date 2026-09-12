import { Injectable } from '@nestjs/common';
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
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  findAll() {
    return this.courses;
  }

  findOne(name: string) {
    return this.courses.find(
      (c) => c.name === name,
    );
  }

  update(
    name: string,
    updateCourseDto: UpdateCourseDto,
  ) {
    const course = this.findOne(name);

    if (!course) {
      return {
        message: 'Course Not Found',
      };
    }

    Object.assign(course, updateCourseDto);

    return course;
  }

  remove(name: string) {
    this.courses = this.courses.filter(
      (c) => c.name !== name,
    );

    return {
      message: 'Deleted Successfully',
    };
  }
}