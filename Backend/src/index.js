const express = require('express')
const cors = require('cors')
const routes = require('./routes')//chama o arquivo que contem as rotas da aplicação
const { errors } = require('celebrate')
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

const PORT = 3333
app.listen(PORT,() => {

    console.log('Ola senhor Miguel Gabriel supremo poder')
    console.log('servidor iniciado com sucesso')
    console.log('para derrubar o servidor, use as teclas CTRL + C')

})

