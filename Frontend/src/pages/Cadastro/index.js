import React from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import gato6 from '../../assets/gato6.gif';//importa o gif do gato 1

export default function cadastro(){
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
          <form>
            <input placeholder="Nome da ONG"/>
            <input type="email" placeholder="E-mail"/>
            <input placeholder="Whatsapp" maxlength="11" />
            <textarea  placeholder="Pequena descrição sobre a ONG" maxlength="500" />
         
           <div className="input-group">
               
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{width:80}} maxlength="2"/>
           </div>
         
           <button className="buttonCadastrarOng" type="submit" >Cadastrar</button>
         
         </form>
    </div>
        
    <img src={gato6} alt="gato impossibilitado de dormi" className="imgCadastroPet"/>
    </div>
    </div>
        

    );
}