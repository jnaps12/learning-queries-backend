import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CredentialStudentRelation1667562812927
  implements MigrationInterface
{
  newColumn = new TableColumn({
    name: 'student_id',
    type: 'int',
    isNullable: true,
  });

  newForeignKey = new TableForeignKey({
    columnNames: ['student_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'student',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('credential', this.newColumn);

    await queryRunner.createForeignKey('credential', this.newForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'credential',
      'FK_63c20d70b683202c89e942d8dfd',
    );

    await queryRunner.dropColumn('credential', 'student_id');
  }
}
