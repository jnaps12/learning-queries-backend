import { MigrationInterface, QueryRunner } from 'typeorm';
import { idColumn } from '../utils/columns';
import { createdAtcolumn } from '../utils/columns/createdAt';
import { updatedAtColumn } from '../utils/columns/upatedAt';
import { Table } from 'typeorm';

export class QuestionGroup1667220105967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question_group',
        columns: [
          idColumn,
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'icon_url',
            type: 'text',
            isNullable: false,
          },
          createdAtcolumn,
          updatedAtColumn,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('question_group');
  }
}
