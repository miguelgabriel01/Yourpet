const crypto = require('crypto')
const connection = require('../Database/connection')//importa o arquivo de configuração

module.exports = {
    //rota responsavel por cadastrar as ongs
    async create(request,response){
        const { nome, email, descricao, whatsapp, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({

            id,//ID da ong
            nome,//nome da ong
            email,//email oficial da ong
            descricao,//descrição sobre a ong
            whatsapp,//whatsapp oficial da ong
            cidade,//cidade onde a ong mantem as atividades
            uf,//estado de origem

        })

        return response.json({ id })
        console.log(id)
    },

    //rota responsavel por listar as ongs cadastradas 
    async index(request, response){
        const ongs = await connection('ongs').select('*')

        return response.json( ongs )
    }
}