import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../utils/columns';
import { createdAtcolumn } from '../utils/columns/createdAt';
import { updatedAtColumn } from '../utils/columns/upatedAt';
import { TableForeignKey } from 'typeorm';

export class Question1667221365934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question',
        columns: [
          idColumn,
          {
            name: 'query',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'difficulty',
            type: 'enum',
            enum: ['EASY', 'INTERMEDIARY', 'HARD'],
            isNullable: false,
          },
          {
            name: 'thumb_url',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'question_group_id',
            type: 'int',
          },
          createdAtcolumn,
          updatedAtColumn,
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'question',
      new TableForeignKey({
        columnNames: ['question_group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'question_group',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('question');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('question_group_id') !== -1,
    );
    await queryRunner.dropForeignKey('question', foreignKey);
    await queryRunner.dropColumn('question', 'question_group_id');
    await queryRunner.dropTable('question');
  }
}
