import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../utils/columns';
import { createdAtcolumn } from '../utils/columns/createdAt';
import { updatedAtColumn } from '../utils/columns/upatedAt';

export class Student1667307996402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'student',
        columns: [
          idColumn,
          {
            name: 'enrollment',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'professor_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'auth_id',
            type: 'int',
            isNullable: true,
          },
          createdAtcolumn,
          updatedAtColumn,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('student', true);
  }
}
