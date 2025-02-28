import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataStatus  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "status" ("status") VALUES
        ('Новое'),
        ('На проверке'),
        ('Научная проверка'),
        ('На исправлении'),
        ('Обработано');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
