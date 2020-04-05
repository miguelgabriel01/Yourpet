import React from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina


//imagens
import gato3 from '../../assets/gato3.gif';//importo o gif do gato
import gato1 from '../../assets/gato1.gif';//importa o gif do gato 1

export default function home(){
  
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
           <h1>Bem-vindo ao Youpet..</h1>
         </div>
      </div>

      


    <div className="textoInicial">
       <p className="informaçãoSobrePagina"> bem-vindo ao maior portal de adoção e doação de animais do país. faça o Download do aplicativo e confira as possibilidades de doar e adotar um animal de estimação ou colaborar com alguma ong na qual somos parceiros</p>
        <img src={gato1} alt="gato impossibilitado de dormi" />
    </div>


<div className="sobreHome">
 <div className="formulario">
 <div className="principal">
<h2>Iniciar doação</h2>

 <form>
    <div className="meio">
      <input type="email" name="email" required=" " />
      <label>Email</label>
    </div> 
    <div className="meio">
      <input type="password" name="senha"  required=" " />
      <label>Senha</label>
    </div>   
     <input type="submit" name="" value="Entrar" />
</form>
</div>
</div>
<p className="informação">Para iniciar o processo de adoção, você não precisa estar registrado no site. mas se você quiser fazer algum tipo de doação, por segurança, é necessário que o usuário esteja cadastrado.</p>

</div>

<div className="gifFinal">
<img id="gato2" src={gato3} alt="gato pulando feito gato" />
</div>

</div>
);
}