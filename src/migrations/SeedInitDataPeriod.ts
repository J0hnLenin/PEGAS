import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataPeriod  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "period" ("period") VALUES
        ('Семестры'),
        ('Триместры'),
        ('Четверти');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
