const connection = require('../Database/connection')

module.exports = {
    
    //listar os incidentes
   async index(request, response){
       const {page=1} = request.query;

       const [count] = await connection ('incidents').count()

       //console.log(count)

       const incidents = await connection ('incidents')
       .join('ongs','ongs.id','=','incidents.ong_id')
       .limit(5)
       .offset((page-1)*5)
       .select(['incidents.*',
       'ongs.nome',
       'ongs.email',
       'ongs.descricao',
       'ongs.whatsapp',
       'ongs.cidade',
       'ongs.uf'
       ]);
     

    response.header('X-Total-Count',count['count(*)'])

     return response.json(incidents)
     //console.log(incidents)

   },
   
    //criar incidentes
    async create(request, response){
        const { nome_do_pet, especie, descricao, idade, sexo } = request.body;

        const ong_id = request.headers.authorization;

        const [ id ] = await connection ('incidents').insert({
            nome_do_pet,
            especie,
            descricao,
            idade,
            sexo,
            ong_id,
        });

        return response.json({id,nome_do_pet,especie,descricao,idade,sexo,ong_id})
    },

    //deleta um incidente
    async delete(request,response){
        const {id} = request.params;

        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first()

        if(incident.ong_id != ong_id){
            return response.status(401).json({
                error: 'Operação não permitida'
            })
        }

        await connection('incidents').where('id',id).delete();

        return response.status(204).send()
    }

}