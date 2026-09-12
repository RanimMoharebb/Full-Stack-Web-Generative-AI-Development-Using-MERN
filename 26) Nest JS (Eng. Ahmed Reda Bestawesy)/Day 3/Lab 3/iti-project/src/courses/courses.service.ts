import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: Model<Course>,
  ) {}

  // =========================
  // CREATE COURSE
  // =========================
  async create(createCourseDto: any) {
    if (
      createCourseDto.grade < 0 ||
      createCourseDto.grade > 100
    ) {
      throw new BadRequestException(
        'Grade must be between 0 and 100',
      );
    }

    const exists = await this.courseModel.findOne({
      name: createCourseDto.name,
    });

    if (exists) {
      throw new BadRequestException(
        'Course already exists',
      );
    }

    const course = new this.courseModel({
      ...createCourseDto,
      users: [],
    });

    return course.save();
  }

  // =========================
  // GET ALL COURSES
  // =========================
  findAll() {
    return this.courseModel.find().populate('users');
  }

  // =========================
  // GET ONE COURSE
  // =========================
  async findOne(name: string) {
    const course = await this.courseModel
      .findOne({ name })
      .populate('users');

    if (!course) {
      throw new NotFoundException(
        `Course ${name} not found`,
      );
    }

    return course;
  }

  // =========================
  // UPDATE COURSE
  // =========================
  async update(name: string, updateCourseDto: any) {
    const course = await this.courseModel.findOne({
      name,
    });

    if (!course) {
      throw new NotFoundException(
        `Course ${name} not found`,
      );
    }

    if (
      updateCourseDto.grade !== undefined &&
      (updateCourseDto.grade < 0 ||
        updateCourseDto.grade > 100)
    ) {
      throw new BadRequestException(
        'Grade must be between 0 and 100',
      );
    }

    Object.assign(course, updateCourseDto);

    return course.save();
  }

  // =========================
  // DELETE COURSE
  // =========================
  async remove(name: string) {
    const course = await this.courseModel.findOne({
      name,
    });

    if (!course) {
      throw new NotFoundException(
        `Course ${name} not found`,
      );
    }

    await this.courseModel.deleteOne({ name });

    return {
      message: 'Deleted Successfully',
    };
  }
}