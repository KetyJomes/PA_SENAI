import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'

const App = () => {
  return (
    //Roteamento do react Browser
     <BrowserRouter> 
      <Routes>
        {/* //Navegar entre componentes */}
        <Route path='/' element = {<Home />} />
        {/* Ao acessar o localHost, se quiser que apareça o que tem dentro do componente about, colocar /about do lado do localHost */}
        <Route path="/about" element={<About />} />      
      </Routes>  
    </BrowserRouter>
  )

}

export default App
