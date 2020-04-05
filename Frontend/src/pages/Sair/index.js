import React from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import gato5 from '../../assets/gato9.gif';//importa a img do gato

import './style.css';//importa o css da pagina

export default function sair(){
    return(
<div className="conteudo">
       <div className="ImgPrincipalSair">
        <header className="menuSair" >
         <a href="#" >Yourpet</a>
           <nav>
              <li><Link  to="/">Inicio</Link></li>
              <li><Link  to="/Sobre">Sobre</Link></li>
              <li><Link  to="/cadastro">Cadastro</Link></li>
              <li><Link  to="/sair">Sair</Link></li>
           </nav>
        </header>
         <div className="tituloSair">
           <h1>Adeus...</h1>
         </div>
      </div>

        <div class="sair">


<img src={gato5} alt="gato triste.." />
</div>

</div>
    );
}