import React from 'react';//impporta o react para este arquivo
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import './style.css';//importa o css para esta pagina

//importação de img
import gato4 from '../../assets/gato4.gif';//importa para essa pagina o gif do gato 4

export default function sobre(){
    return(
      <div className="conteudo">
        <div className="ImgPrincipalSobre">
         <header className="menuSobre" >
          <a href="#" >Yourpet</a>
            <nav>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/sair">Sair</Link></li>
             </nav>
         </header>
          <div className="tituloSobre">
            <h1>Quem somos?</h1>
          </div>
       </div>


       <div className="sobre">
      <p>  Nos da Youpet, somos o maior portal de doação 
          e adoção de Pets, em todo o Brasil. pioneiros 
          na iniciativa de facilitar o processo que é a 
          possibilidade de ajudar um animal seja adotando
           e levando para casa, ou, simplesmente colaborando 
           para a sua manutenção. temos em nosso registro, mais
            de 5 mil animais de todas as cores, raças e sexo, a 
            procura de um lar. contamos com a parceria de ONGs que
             fazem parte desta comunidade  que tem por único e belo 
             objetivo cuidar daqueles que foram abandonados por quem
              deveria lhe dar proteção.<br /><br />
Somos uma iniciativa totalmente privada, na qual
 nossa intenção esta longe de obter algum lucro com  este site.</p>

 <img src={gato4} alt="" className="imgSobre" />
  </div>
     
</div>
    );
}