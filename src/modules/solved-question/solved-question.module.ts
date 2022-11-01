import { Module } from '@nestjs/common';
import { SolvedQuestionService } from './solved-question.service';
import { SolvedQuestionController } from './solved-question.controller';

@Module({
  providers: [SolvedQuestionService],
  controllers: [SolvedQuestionController],
})
export class SolvedQuestionModule {}
