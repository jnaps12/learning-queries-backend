import { Module } from '@nestjs/common';
import { QuestionGroupService } from './question-group.service';
import { QuestionGroupController } from './question-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionGroupEntity } from './entities/question-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionGroupEntity])],
  controllers: [QuestionGroupController],
  providers: [QuestionGroupService],
})
export class QuestionGroupModule {}
