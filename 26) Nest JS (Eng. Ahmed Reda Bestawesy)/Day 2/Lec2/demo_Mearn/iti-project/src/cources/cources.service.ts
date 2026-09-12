import { Injectable } from '@nestjs/common';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';

@Injectable()
export class CourcesService {
  create(createCourceDto: CreateCourceDto) {
    return 'This action adds a new cource';
  }

  findAll() {
    return `This action returns all cources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cource`;
  }

  update(id: number, updateCourceDto: UpdateCourceDto) {
    return `This action updates a #${id} cource`;
  }

  remove(id: number) {
    return `This action removes a #${id} cource`;
  }
}
