import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDoneColumnToQuestion1670507466796
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'question',
      new TableColumn({
        name: 'done',
        type: 'boolean',
        isNullable: false,
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('question', 'done');
  }
}
