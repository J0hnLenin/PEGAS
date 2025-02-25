import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataStatus  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "status" ("status") VALUES
        ('В работе'),
        ('Научная проверка'),
        ('Новое'),
        ('На исправлении'),
        ('Обработано');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
