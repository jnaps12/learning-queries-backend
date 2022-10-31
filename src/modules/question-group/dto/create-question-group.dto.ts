import { IsNotEmpty } from 'class-validator';

export class CreateQuestionGroupDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  thumb_url: string;
}
