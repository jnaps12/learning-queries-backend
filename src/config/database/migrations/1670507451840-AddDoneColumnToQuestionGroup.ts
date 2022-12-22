import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDoneColumnToQuestionGroup1670507451840
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'question_group',
      new TableColumn({
        name: 'done',
        type: 'boolean',
        isNullable: false,
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('question_group', 'done');
  }
}
