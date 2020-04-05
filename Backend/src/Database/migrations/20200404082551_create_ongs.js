exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();//a chave primaria da ong vai ser o ID
        table.string('nome').notNullable();//nome da ong
        table.string('email').notNullable();//email oficial da ong
        table.string('descricao').notNullable();//pequena descrição sobre a ong
        table.string('whatsapp').notNullable();//whatsapp oficial da ong
        table.string('cidade').notNullable();//cidade onde a ong faz suas atividades
        table.string('uf',2).notNullable();//estado no qual a ong pertece  
        //futuramente fotos sobre a ong, poderam ser atribuidas na hora do cadastro
        //usaremos a cidade como ponto de localização no Google maps
  })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');//caso a tabela ongs já exista, ela é apagada e no lufar vai ficar a nova tabela atualizada
};