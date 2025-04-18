import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(

    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

  ) {}

  create(createCourseInput: CreateCourseInput) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.coursesRepository.findOneBy({ id });
    if (!course) throw new NotFoundException(`Course with id ${id} not found`);
    return course;
  }

  update(id: number, updateCourseInput: UpdateCourseInput) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
