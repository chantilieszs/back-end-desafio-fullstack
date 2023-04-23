import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1680503895099 implements MigrationInterface {
    name = 'InitialMigration1680503895099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(15) NOT NULL, "registered" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_479ee8911543c94860214f5fc39" UNIQUE ("email"), CONSTRAINT "UQ_628df22903686cf20d90fc74d6a" UNIQUE ("phone"), CONSTRAINT "PK_c3220bb99cfda194990bc2975be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "email" character varying(70), "phone" character varying(15) NOT NULL, "registered" TIMESTAMP NOT NULL DEFAULT now(), "customerId" uuid, CONSTRAINT "UQ_f9f62556c7092913f2a06975052" UNIQUE ("phone"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_a54f4088bd2e596cc15c1f7aa3d" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_a54f4088bd2e596cc15c1f7aa3d"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "Customers"`);
    }

}
