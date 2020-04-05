const connection = require('../Database/connection')

module.exports = {
    async create(request, response) {
        const {id} = request.body;//para fazer o login, a ONG deve informar o email e a senha

        const ongs = await connection('ongs')
        .where('id',id)
        .select('nome','cidade','uf','email')
        .first();

        if(!ongs){
            return response.status(400).json({
                error: 'Dados informados são invalidos. por favor, tente novamente'
            })
        }

        return response.json( ongs )
    }
}