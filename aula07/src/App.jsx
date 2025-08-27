import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flecha } from './componentes/Flecha'
import { Titulo } from './componentes/anonima'

function App() {

  return (
    <>  
        <h1>Hello World!</h1>
        {<Flecha /> /*Melhor componente*/}
        <Titulo texto="Hello World" /> 
    </>
  )
}

export default App
