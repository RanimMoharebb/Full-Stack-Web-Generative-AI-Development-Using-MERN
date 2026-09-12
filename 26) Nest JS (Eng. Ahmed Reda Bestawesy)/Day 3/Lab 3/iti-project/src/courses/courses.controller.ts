import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  // =========================
  // UPLOAD FILE (MULTER)
  // =========================
  @UseGuards(AuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const unique =
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9);

          cb(null, unique + extname(file.originalname));
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    return {
      message: 'File uploaded successfully',
      fileName: file.filename,
    };
  }

  // =========================
  // CREATE COURSE
  // =========================
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  // =========================
  // GET ALL COURSES
  // =========================
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  // =========================
  // GET ONE COURSE
  // =========================
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.coursesService.findOne(name);
  }

  // =========================
  // UPDATE COURSE
  // =========================
  @UseGuards(AuthGuard)
  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(
      name,
      updateCourseDto,
    );
  }

  // =========================
  // DELETE COURSE (ADMIN ONLY)
  // =========================
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.coursesService.remove(name);
  }
}