import { IsEnum, IsNotEmpty } from 'class-validator';
import { Levels } from '../entities/question.entity';

export class CreateQuestionDto {
  @IsNotEmpty()
  query: string;

  @IsNotEmpty()
  @IsEnum(Levels)
  difficulty: Levels;

  @IsNotEmpty()
  thumb_url: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  question_group_id: number;
}
