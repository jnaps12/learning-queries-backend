import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { idColumn } from '../utils/columns';

export class SolvedQuestion1667311102181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solved-question',
        columns: [
          idColumn,
          {
            name: 'student_id',
            type: 'int',
          },
          {
            name: 'question_id',
            type: 'int',
          },
          {
            name: 'attempts',
            type: 'int',
          },
          {
            name: 'started_at',
            type: 'timestamp',
          },
          {
            name: 'done_at',
            type: 'timestamp',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'solved-question',
      new TableForeignKey({
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'student',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'solved-question',
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'question',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('solved-question');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('student_id') !== -1,
    );
    const foreignKeyQuestion = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('question_id') !== -1,
    );
    await queryRunner.dropForeignKey('solved-question', foreignKeyQuestion);
    await queryRunner.dropForeignKey('solved-question', foreignKey);
    await queryRunner.dropColumn('solved-question', 'student_id');
    await queryRunner.dropColumn('solved-question', 'question_id');
    await queryRunner.dropTable('solved-question');
  }
}
