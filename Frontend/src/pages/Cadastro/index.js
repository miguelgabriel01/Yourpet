import React, { useState } from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link, useHistory } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import api from '../../Services/api'//importa o arquivo da API

import gato6 from '../../assets/gato6.gif';//importa o gif do gato 1

export default function Register(){
 
  //recebe os dados do form 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [descricao, setDescricao] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault()//impede que a pagina recarregue apos o envio dos dados pelo form

      const data = {
      nome,
      email,
      descricao,
      whatsapp,
      cidade,
      uf,
    }
     
    try{
       //envia os dados para a api
    const response = await api.post('ongs', data )
     
    alert(`Seu ID para acesso: ${response.data.id}`)

       history.push('/')//redireciona para a pagina inicial

    }catch(err){
      alert(err)
      console.log(err)
    }
    
  }

    return(
        <div className="conteudo">

<div className="ImgPrincipalCadastro">
        <header className="menuCadastro" >
         <a href="#" >Yourpet</a>
           <nav>
              <li><Link  to="/">Inicio</Link></li>
              <li><Link  to="/Sobre">Sobre</Link></li>
              <li><Link  to="/cadastro">Cadastro</Link></li>
              <li><Link  to="/sair">Sair</Link></li>
           </nav>
        </header>
         <div className="tituloCadastro">
           <h1>Crie agora a sua conta em nosso site...</h1>
         </div>
      </div>


<div className="cadastro">
  <div className="formularioCadastroOng">

          <form onSubmit={handleRegister} >
            <input
             placeholder="Nome da ONG"
             value={nome}
             onChange={ e=> setNome(e.target.value)}
             />

            <input
             type="email" placeholder="E-mail"
             value={email}
             onChange={ e=> setEmail(e.target.value)}
             />

            <input
             placeholder="Whatsapp" maxlength="11" 
             value={whatsapp}
             onChange={ e=> setWhatsapp(e.target.value)}
             />

            <textarea
              placeholder="Pequena descrição sobre a ONG" maxlength="500" 
              value={descricao}
              onChange={ e=> setDescricao(e.target.value)}
              />
         
           <div className="input-group">
               
            <input
             placeholder="Cidade" 
            value={cidade}
            onChange={ e=> setCidade(e.target.value)}
            />

            <input
             placeholder="UF" style={{width:80}} maxlength="2"
             value={uf}
             onChange={ e=> setUf(e.target.value)}/>
           </div>
         
           <button className="buttonCadastrarOng" type="submit" >Cadastrar</button>
         
         </form>
    </div>
        
    <img src={gato6} alt="gato impossibilitado de dormi" className="imgCadastroPet"/>
    </div>
    </div>
        

    );
}