import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { QuestionGroupService } from '../question-group/question-group.service';
import { QuestionGroupEntity } from '../question-group/entities/question-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity, QuestionGroupEntity])],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionGroupService],
})
export class QuestionModule {}
