import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TodoTable1618705068908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'todos',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'listId',
                type: 'int',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'completed',
                type: 'boolean'
              }
            ],
          }));

        await queryRunner.createForeignKey('todos', new TableForeignKey({
            columnNames: ['listId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'lists',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('todos');
    }

}
