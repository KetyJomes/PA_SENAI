import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Square } from './componentes/square' /*Importando a função que esta no arquivo blue */

function App() {

  return (
    <>  
        <Square cor="blue"/> 
        <Square cor="yellow"/> 
        <Square cor="red"/> 
    </>
  )
}

export default App
