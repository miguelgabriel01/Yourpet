import React, { useState } from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link, useHistory } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import api from '../../Services/api'//importa a api

import gato6 from '../../assets/gato6.gif';//importa o gif do gato 1

export default function NovoCadastro(){
  const [nome_do_pet,setNome_do_pet] = useState('')
  const [especie, setEspecie] = useState('')
  const [descricao, setDescricao] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')

   const history = useHistory()

 const ongId = localStorage.getItem('ongId')//pega o id da sessão


  //função para criar novo registro de pet
  async function handleNovocadastrodePet(e){
   e.preventDefault()

   const data = {

     nome_do_pet,
     especie,
     descricao,
     idade,
     sexo,
   }

   try{

      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

       history.push('/salvos')
   }catch(err){
     alert('Não foi possivel cadastrar o PET. por favor, tente novamente')
   }
  }

    return(
        <div className="conteudo">

<div className="ImgPrincipalCadastroPet">
        <header className="menuCadastroPet" >
         <a href="#" >Yourpet</a>
           <nav>
              <li><Link  to="/">Inicio</Link></li>
              <li><Link  to="/salvos">Salvos</Link></li>
              <li><Link  to="/sair">Sair</Link></li>
           </nav>
        </header>
         <div className="tituloCadastroPet">
           <h1>Cadastre agora o pet...</h1>
         </div>
      </div>


<div className="cadastroPet">
  <div className="formularioCadastroPet">
          <form onSubmit={handleNovocadastrodePet} >
            <input
             placeholder="Nome do PET"
             value={nome_do_pet}
             onChange={e => setNome_do_pet(e.target.value)}
             />

            <input
             placeholder="Idade do PET"  
             value={idade}
             onChange={e => setIdade(e.target.value)}
            />

            <textarea
              placeholder="Pequena descrição sobre o PET" maxlength="200" style={{resize:'none'}}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />



            <select
             className="select1"
              placeholder="Gato ou Cachorro?"
              value={especie}
              onChange={e => setEspecie(e.target.value)}
            >              
                <option value="">Gato ou Cachorro?</option>
                <option value="Gato">Gato</option>
                <option value="cachorro">Cachorro</option>

            </select>


            <select
             className="select2"
             placeholder="Sexo do PET" maxlength="11"
             value={sexo} 
             onChange={e => setSexo(e.target.value)}
            >
                <option value="">Qual sexo do PET?</option>
                <option value="Fêmea">Fêmea</option>
                <option value="Macho">Macho</option>

             </select>

           <div className="input-group"></div>
         
           <button className="buttonCadastrarPet" type="submit" >Cadastrar PET</button>
         
         </form>
    </div>
        
    <img src={gato6} alt="gato impossibilitado de dormi" className="gato6"/>
    </div>
    </div>
        

    );
}