const express = require('express')

//importação de arquivos de controler
const OngController = require('./Controllers/OngController')//importa o arquivo que faz a parte relacionada as ongs
const SessionController = require('./Controllers/SessionController')//importa o arquivo responsavel por fazer a parte de login
const IncidentsController = require('./Controllers/IncidentController')//importa o arquivo que faz a parte de cadastro de incidents, listagem e exclusão de dados
const ProfileController = require('./Controllers/ProfileController')//importa o arquivo responsavel por lista detalhadamente cada incidente criado pela ong

const { celebrate, Segments, Joi} = require('celebrate')


const routes = express.Router();

//Rota responsavel por listar as ongs cadastradas
routes.get('/ongs', OngController.index)

//Cadastrar as ongs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        
        nome:Joi.string().required(),//informa que o nome deve ser obrigatorio
        email:Joi.string().required().email(),//alem do dado ser obrigatorio, ele deve ser no formato de E-mail
        descricao:Joi.string().required(),//descrição tambem é obrigatoria
        whatsapp:Joi.string().required(),//whatsapp obrigatorio
        cidade:Joi.string().required(),//dados relacionados a cidade
        uf:Joi.string().required().length(2),//o estado alem de ser obrigatorio, deve conter apenas dois digitos

    })

}), OngController.create);

//Fazer login
routes.post('/sessions', SessionController.create)

///Criar casos
routes.post('/incidents', IncidentsController.create)

//Lista todos os casos criados pelas ONGS
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),

    })
}),IncidentsController.index)

//Deletar um caso
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:Joi.number().required(),//tipo numero e obrigatorio
    })
}),IncidentsController.delete)

//Visualizar cada caso de maneira detalhada e unica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}), ProfileController.index)

module.exports = routes;