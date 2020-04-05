exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('nome_do_pet').notNullable();//nome dado ao caso
        table.string('especie').notNullable();//especie do animal(se é gato ou cachorro)
        table.string('descricao').notNullable();//descrição sobre o caso
        table.string('idade').notNullable();//idade sobre o animal
        table.string('sexo').notNullable();//sexo do animal
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');

        //futuramente fotos sobre o pt poderam ser atribuidas pela ong

    });
};
   
   
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');//caso a tabela ongs já exista, ela é apagada e no lugar vai ficar a nova tabela atualizada
};
