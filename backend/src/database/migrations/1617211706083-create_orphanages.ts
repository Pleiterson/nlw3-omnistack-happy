import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1617211706083 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // este método vai realizar as alterações no banco de dados
    // criar uma nova tabela, criar um novo campo, deletar algum campo
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id', // coluna referente ao id do orfanato
          type: 'integer', // é do tipo inteiro
          unsigned: true, // a coluna id, integer não pode ser negativa
          isPrimary: true, // informando que a coluna id é a primary key
          isGenerated: true, // coluna id será gerada automaticamente
          generationStrategy: 'increment', // será gerada automaticamente com uma lógica incremental: 1, 2, 3...
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, // números depois da vírgula
          precision: 2, // números antes da vírgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10, // números depois da vírgula
          precision: 2, // números antes da vírgula
        },
        {
          name: 'about', // informações sobre os orfanatos
          type: 'text'
        },
        {
          name: 'instructions', // instruções para visita do orfanato
          type: 'text'
        },
        {
          name: 'opening_hours', // aberto a partir de determinado horário
          type: 'varchar'
        },
        {
          name: 'open_on_weekends', // aberto nos finais de semana ou não
          type: 'boolean',
          default: false // por padrão ele não é aberto nos finais de semana
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // este método desfaz as alterações realizadas no método up
    await queryRunner.dropTable('orphanages');
  }
}
