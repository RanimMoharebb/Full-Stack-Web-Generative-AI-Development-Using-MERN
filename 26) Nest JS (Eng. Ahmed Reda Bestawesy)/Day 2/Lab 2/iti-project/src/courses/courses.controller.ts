import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  // =========================
  // UPLOAD FILE (MULTER)
  // =========================
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      fileName: file.filename,
    };
  }

  // =========================
  // COURSES CRUD
  // =========================

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.coursesService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(name, updateCourseDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.coursesService.remove(name);
  }
}