import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Square } from './componentes/square' 

function App() {

  return (
    <>  
        <Square classe="yellow"/> 
        <Square classe="red"/> 
    </>
  )
}

export default App
