import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../utils/columns';
import { createdAtcolumn } from '../utils/columns/createdAt';
import { updatedAtColumn } from '../utils/columns/upatedAt';

export class Credential1667400969760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credential',
        columns: [
          idColumn,
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          createdAtcolumn,
          updatedAtColumn,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credential', true);
  }
}
