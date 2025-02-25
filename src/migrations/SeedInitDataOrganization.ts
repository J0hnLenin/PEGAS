import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitDataOrganization  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "organization" ("organization") VALUES
        ('Головной ВУЗ'),
        ('Тобольск'),
        ('Ишим');
    `);
  }
   
  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query();
  }
}
