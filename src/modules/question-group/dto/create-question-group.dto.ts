import { IsEnum, IsNotEmpty } from 'class-validator';
import { Levels } from '../../question/entities/question.entity';

export class CreateQuestionGroupDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  thumb_url: string;

  done: boolean;

  @IsNotEmpty()
  @IsEnum(Levels)
  difficulty: Levels;
}
