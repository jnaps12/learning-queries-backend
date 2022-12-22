import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDifficultyQuestionGroup1671713386514
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'question_group',
      new TableColumn({
        name: 'difficulty',
        type: 'enum',
        enum: ['EASY', 'INTERMEDIARY', 'HARD'],
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('question_group', 'difficulty');
  }
}
