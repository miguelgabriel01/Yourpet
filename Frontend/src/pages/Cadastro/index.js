import React from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina


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


<div class="cadastro">
         <div class="formulario">
          <div class="principal">
            <h2>Iniciar cadastro de sua ONG</h2>
        
             <form>
                <div class="meio">
                  <input type="text" name="nome" required=" " />
                  <label>Nome da ONG</label>
                </div> 
                <div class="meio">
                  <input type="email" name="email" required=" " />
                  <label>Email oficial da ONG</label>
                </div> 
                <div class="meio">
                  <input type="text" name=""  required=" " />
                  <label>Cidade</label>
                </div>   
                <div class="meio">
                  <input type="text" name=""  required=" " />
                  <label>UF</label>
                </div>   
                <div class="meio">
                  <input type="password" name="senha2"  required=" " />
                  <label>Escolha uma Senha</label>
                </div>   
                <input type="submit" name="" value="Cadastrar" />
            </form>
           </div>
         </div>
         <p class="informação">Ao registrar sua ONG em nosso site, as pessoas de todo o Brasil podem ver seu trabalho e colaborar para ajudar financeiramente, adotando um animal ou até promovendo para que mais pessoas possam conhecer e ajudar os animais que precisam  de apoio financeiro ou de um lar. O cadastro é totalmente gratuito e seguro.</p>
    
    </div>
    
        </div>


    );
}