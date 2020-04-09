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
      <p> Nós da Yourpet somos uma plataforma que visa facilitar a adoção e doação de animais.
          somos responsáveis por intermediar as ONGs de proteção animal e o público que deseja
          adotar um PET de estimação. Iniciar o processo de doação em nosso sistema é muito simples.
          Basta apenas o responsável pela ONG ou instituição, fazer um registro simples em nosso 
          sistema. logo depois ele estará autorizado a registrar os animais de estimação em nosso banco 
          de dados. no final, o usuário que deseja adotar um animal deve fazer o download do nosso aplicativo 
          e verificar as ONGs mais próximas em sua região.<br /><br />
          Somos uma iniciativa totalmente privada, na qual
          nossa intenção esta longe de obter algum lucro com  este site.</p>

 <img src={gato4} alt="" className="imgSobre" />
  </div>
     
</div>
    );
}