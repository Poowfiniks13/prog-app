import { useState } from 'react'

import './App.css'
import Bomba from './componentes/Bomba';

function App(){
  
  const [inputNome, setinputName] = useState ('')
  function cadastrar() { 
  console.log ("cadastrando: " + inputNome);
  }
  return (
    <>

      <h1>inputs controlados</h1>
      Nome <input type="text"
      Value={inputNome}
      onChange={(e) => setinputName (e.target.value)} />

<br />
      <button onClick={cadastrar}>cadastrar</button>

    <Bomba/>
    </>
    
  )
}

export default App

