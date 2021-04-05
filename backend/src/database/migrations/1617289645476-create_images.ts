import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1617289645476 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
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
          name: 'path', // caminho do arquivo onde a imagem está salva
          type: 'varchar'
        },
        {
          name: 'orphanage_id', // id do orfanato
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE', // CASCADE altera o id da tabala ofanato para que não se perca o relacionamento com a tabela images
          onDelete: 'CASCADE' // CASCADE também deleta as imagens caso seja deletado o orfanato
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
