import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { Repository } from 'typeorm';
import { QuestionGroupService } from '../question-group/question-group.service';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,

    private readonly questionGroupService: QuestionGroupService,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.questionRepository.create(createQuestionDto);

    await this.questionGroupService.findOne(question.questionGroupId);

    if (!question) {
      throw new HttpException('New question not created', 400);
    }
    return await this.questionRepository.save(question);
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!question) {
      throw new NotFoundException(question, 'Question not found.');
    }

    return question;
  }

  async findOneByGroupId(groupId: number) {
    const question = await this.questionRepository.findOne({
      where: {
        questionGroupId: groupId,
      },
    });

    if (!question) {
      throw new NotFoundException(question, 'QuestionGroup not found.');
    }

    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.update(
      { id },
      updateQuestionDto,
    );
    if (!question) {
      throw new NotFoundException(
        question,
        `Question with id #${id} was not updated.`,
      );
    }

    return await this.findOne(id);
  }

  async remove(id: number) {
    const question = await this.findOne(id);
    return await this.questionRepository.remove(question);
  }
}
