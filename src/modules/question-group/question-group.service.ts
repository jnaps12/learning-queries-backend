import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionGroupDto } from './dto/create-question-group.dto';
import { UpdateQuestionGroupDto } from './dto/update-question-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionGroupEntity } from './entities/question-group.entity';
import { Repository } from 'typeorm';
import { Levels } from '../question/entities/question.entity';

@Injectable()
export class QuestionGroupService {
  constructor(
    @InjectRepository(QuestionGroupEntity)
    private readonly questionGroupRepository: Repository<QuestionGroupEntity>,
  ) {}

  async create(createQuestionGroupDto: CreateQuestionGroupDto) {
    const newQuestionGroup = await this.questionGroupRepository.create(
      createQuestionGroupDto,
    );

    if (!newQuestionGroup) {
      throw new HttpException('New questionGroup not created', 400);
    }

    return await this.questionGroupRepository.save(newQuestionGroup);
  }

  async findAll() {
    return await this.questionGroupRepository.find();
  }

  async findQuestionByDifficulty(difficulty: Levels) {
    return await this.questionGroupRepository.find({
      where: {
        difficulty: difficulty,
      },
    });
  }

  async findOne(id: number) {
    const questionGroup = await this.questionGroupRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!questionGroup) {
      throw new NotFoundException(
        questionGroup,
        `Question group with id #${id} was not found.`,
      );
    }

    return questionGroup;
  }

  async update(id: number, updateQuestionGroupDto: UpdateQuestionGroupDto) {
    const questionGroupUpdated = await this.questionGroupRepository.update(
      { id },
      updateQuestionGroupDto,
    );

    if (!questionGroupUpdated) {
      throw new NotFoundException(
        questionGroupUpdated,
        `Question group with id #${id} was not updated.`,
      );
    }

    return await this.findOne(id);
  }

  async remove(id: number) {
    const questionGroup = await this.findOne(id);
    await this.questionGroupRepository.remove(questionGroup);
    return questionGroup;
  }
}
