import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataTypeAchievement implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "type_achievement" ("typeAchievement") VALUES
        ('Статья'),
        ('Диплом'),
        ('Сертификат'),
        ('Грамота');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
