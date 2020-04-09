import React, {useState} from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link, useHistory } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import api from '../../Services/api'//responsavel por importa a api

//imagens
import gato3 from '../../assets/gato3.gif';//importo o gif do gato
import gato1 from '../../assets/gato1.gif';//importa o gif do gato 1

export default function Home(){
  
 const [id, setId] = useState('')
 const [email, setEmail] = useState('')
 
const history = useHistory()

 async function handleLogin(e){
   e.preventDefault()

   try{
      const response = await api.post('sessions', { email,id })
      
      //salva na sessão o nome e o ID da ong
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongNome', response.data.nome)

      //apos o login, redireciona o usuario
      history.push('/salvos')//envia para a pagina que lista os pets salvos
   }catch(err){
     alert('Falha no login. Verifique Email e ID, e tente novamente')
   }
 } 
  return(
    <div className="conteudo">
       <div className="ImgPrincipal">
        <header className="menu" >
         <a href="#" >Yourpet</a>
           <nav>
              <li><Link  to="/">Inicio</Link></li>
              <li><Link  to="/Sobre">Sobre</Link></li>
              <li><Link  to="/cadastro">Cadastro</Link></li>
              <li><Link  to="/sair">Sair</Link></li>
           </nav>
        </header>
         <div className="titulo">
           <h1>Bem-vindo ao Yourpet..</h1>
         </div>
      </div>

      


    <div className="textoInicial">
       <p className="informaçãoSobrePagina"> bem-vindo a um dos maiores portais de adoção e doação de animais do país. faça o Download do aplicativo e confira as possibilidades de doar e adotar um animal de estimação ou colaborar com alguma ong na qual somos parceiros</p>
        <img src={gato1} alt="gato impossibilitado de dormi" className="gato1"/>
    </div>


<div className="sobreHome">
 <div className="formularioLogin">
 <form onSubmit={handleLogin}>
   <input
    type="email" placeholder="E-mail"
    value={email}
    onChange={ e=> setEmail(e.target.value)}
    />

  <input
   type="password" placeholder="ID"
   value={id}
   onChange={ e=> setId(e.target.value)}
   />

  <button className="buttonLogin" type="submit" >Entrar</button>
</form>
</div>
<p className="informaçãoHome">Para iniciar o processo de adoção, você não precisa estar registrado no site, é necessário apenas fazer o DOWNLOAD do APP. Mas se você quiser fazer algum tipo de doação, por segurança, é necessário que o usuário esteja cadastrado em nosso sistema. no fim do cadastro você vai receber um ID. ele será responsavel por permitir o seu login em nossa plataforma.</p>

</div>

<div className="gifFinal">
<img id="gato2" src={gato3} alt="gato pulando feito gato" />
</div>

</div>
);
}