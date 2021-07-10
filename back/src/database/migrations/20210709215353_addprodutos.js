exports.up = function(knex) {
  return knex.schema.createTable('produtos',function(table) {
      table.increments().primary();
      table.string('nome_popular').notNullable();
      table.string('nome_cientifico').notNullable();
      table.float('preco').notNullable();
      table.integer('estoque').notNullable();
      table.string('detalhes').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
