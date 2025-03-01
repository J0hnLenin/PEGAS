import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataCategory  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "category" ("category") VALUES
        ('Научная деятельсноть'),
        ('Спортивная деятельность');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(";");
  }
}
