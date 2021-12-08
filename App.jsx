import React from 'react'
import './index.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default function(props) {
   return (
    <div id="app">
        <h1>Fundamentos React</h1>
    <Primeiro></Primeiro>
    <ComParametro titulo="Situação do Aluno" aluno=" Pedro" nota=" 9.3"></ComParametro>
    <Fragmento></Fragmento>

    </div>, el)
}