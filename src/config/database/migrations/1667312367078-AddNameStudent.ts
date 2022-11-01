import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNameStudent1667312367078 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'student',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('student', 'name');
  }
}
