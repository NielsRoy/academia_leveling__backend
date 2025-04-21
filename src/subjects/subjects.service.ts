import { Injectable } from '@nestjs/common';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { Subject } from './entities/subject.entity';
import { Course } from '../courses/entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectsService {

  constructor(

    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,
  
  ) {}


  create(createSubjectInput: CreateSubjectInput) {
    return 'This action adds a new subject';
  }

  async findAllByCourse(course: Course): Promise<Subject[]> {
    return await this.subjectsRepository.findBy({ course });
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  update(id: number, updateSubjectInput: UpdateSubjectInput) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
