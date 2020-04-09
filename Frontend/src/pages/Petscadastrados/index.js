import React, { useState,useEffect } from 'react';//importa o react para o arquivo
import './style.css';//importa o css da pagina
import { Link, useHistory } from 'react-router-dom';//importa o uso de links sem precisar recarregar a pagina

import api from '../../Services/api'//importa a api

import gato5 from '../../assets/gato9.gif';//importa a img do gato

import './style.css';//importa o css da pagina

export default function Petssalvos(){

const [incidents, setIncidents] = useState([])

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongNome = localStorage.getItem('ongNome')


  useEffect(() => {
    
    api.get('profile', {
      headers:{
        Authorization: ongId,
      }
    }).then(response => {
        setIncidents(response.data)
    })

  },[ongId])

  //função para deletar pets

  async function handleDeletarPet(id){
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

    setIncidents(incidents.filter(incident => incident.id !== id));//atualiza o front depois que deletar um pet
    }catch(err){
      alert('Não foi possivei deletar as informações sobre o PET. tente Novamente')
    }
  }

  //função para fazer o logout
  async function handleLogout(){
    localStorage.clear()

    history.push('/sair')//redereciona para a pagina raiz
  }
    return(
  <div className="conteudo">
    <div className="ImgPrincipalSalvos">
      <header className="menuSalvos" >
        <a href="#" >Yourpet</a>
        <nav>
          <li><Link  to="/">Inicio</Link></li>
          <li><Link  to="/doar">Doar</Link></li>
          <li><Link  onClick={handleLogout}>Sair</Link></li>
        </nav>
      </header>
         
      <div className="tituloSair">
        <h1>Bem-vinda {ongNome}...</h1>
      </div>
    </div>

    <div class="salvos">

     {incidents.map(incident => (

       <div className="animalSalvo" key={incident.id}>
       <strong>nome do pet</strong>
          <small>{incident.nome_do_pet}</small>

       <strong>especie:</strong>
         <small>{incident.especie}</small>
         
           <strong>descrição</strong>
              <small>{incident.descricao}</small>
           
           <strong>idade</strong>
             <small>{incident.idade}</small>
         
         <strong>sexo</strong>
             <small>{incident.sexo}</small>
  
         <button className="buttonApagarPet" type="submit" onClick={() => handleDeletarPet(incident.id)}>Deletar</button>
  
       </div>
  
     ))}
    </div>

</div>
    );
}