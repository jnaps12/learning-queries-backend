import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionGroupService } from './question-group.service';
import { CreateQuestionGroupDto } from './dto/create-question-group.dto';
import { UpdateQuestionGroupDto } from './dto/update-question-group.dto';

@Controller('question-group')
export class QuestionGroupController {
  constructor(private readonly questionGroupService: QuestionGroupService) {}

  @Post()
  async create(@Body() createQuestionGroupDto: CreateQuestionGroupDto) {
    return await this.questionGroupService.create(createQuestionGroupDto);
  }

  @Get()
  async findAll() {
    return await this.questionGroupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questionGroupService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionGroupDto: UpdateQuestionGroupDto,
  ) {
    return await this.questionGroupService.update(+id, updateQuestionGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionGroupService.remove(+id);
  }
}
