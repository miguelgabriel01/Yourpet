import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';//responsavel pelas rotas no react( npm install react-router-dom)

import Home from './pages/Home';//importa a pagina inicial
import Sobre from './pages/Sobre';//importa a pagina de sobre
import Cadastro from './pages/Cadastro';//importa a pagina de cadastro
import Sair from './pages/Sair';//importa a pagina sair
import Doação from './pages/Doação'


export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/sobre" exact component={Sobre} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/sair" exact component={Sair} />
            <Route path="/doar" exact component={Doação} />

          </Switch>
        </BrowserRouter>
    );
}

/**
 * o BrowserRouter deve ficar 
 * o Swwitch é responsavel por n permitir mais de uma rota por vez(garante que apenas uma rota seja executada por momento)
 */