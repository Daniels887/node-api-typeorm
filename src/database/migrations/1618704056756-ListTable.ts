import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class ListTable1618704056756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lists',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'userId',
                type: 'uuid',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
            ],
          }));

        await queryRunner.createForeignKey('lists', new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lists');
    }

}
