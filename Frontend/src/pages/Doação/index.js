import React from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import gato6 from '../../assets/gato6.gif';//importa o gif do gato 1

export default function cadastro(){
    return(
        <div className="conteudo">

<div className="ImgPrincipalCadastroPet">
        <header className="menuCadastroPet" >
         <a href="#" >Yourpet</a>
           <nav>
              <li><Link  to="/">Inicio</Link></li>
              <li><Link  to="/Sobre">Sobre</Link></li>
              <li><Link  to="/cadastro">Cadastro</Link></li>
              <li><Link  to="/sair">Sair</Link></li>
           </nav>
        </header>
         <div className="tituloCadastroPet">
           <h1>Cadastre agora o pet...</h1>
         </div>
      </div>


<div className="cadastroPet">
  <div className="formularioCadastroPet">
          <form>
            <input placeholder="Nome do PET"/>
            <input  placeholder="Gato ou Cachorro?"/>
            <textarea  placeholder="Pequena descrição sobre o PET" maxlength="200" style={{resize:'none'}}/>
            <input placeholder="Idade do PET"  />
            <input placeholder="Sexo do PET" maxlength="11" />

           <div className="input-group"></div>
         
           <button className="buttonCadastrarPet" type="submit" >Cadastrar PET</button>
         
         </form>
    </div>
        
    <img src={gato6} alt="gato impossibilitado de dormi" className="gato6"/>
    </div>
    </div>
        

    );
}