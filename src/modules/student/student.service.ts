import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = await this.studentRepository.create(createStudentDto);

    if (!newStudent) {
      throw new HttpException('New student was not created', 400);
    }

    return await this.studentRepository.save(newStudent);
  }

  async findAll() {
    return await this.studentRepository.find();
  }
}
