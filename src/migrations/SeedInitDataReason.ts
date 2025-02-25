import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataReason implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "reason" ("reason") VALUES
        ('Бюджет'),
        ('Договор'),
        ('Целевое');
      `);
  }
   
  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
