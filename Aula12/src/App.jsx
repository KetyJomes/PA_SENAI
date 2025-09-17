import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Profile } from './pages/Profile'

const App = () => {
  return (
    //Roteamento do react Browser
     <BrowserRouter> 
      <Routes>
        {/* //Navegar entre componentes */}
        <Route path='/' element = {<Home />} />
        {/* Ao acessar o localHost, se quiser que apareça o que tem dentro do componente about, colocar /about do lado do localHost */}
        <Route path="/about" element={<About />} />  
        {/* Esse é o caminho da URL para a rota. O :nome é uma parâmetro de rota dinâmico. 
        Ou seja, ele pode ser substituído por qualquer valor quando o usuário acessar a URL. */}
        <Route path="/profile/:nome" element={<Profile />} />  

      </Routes>  
    </BrowserRouter>
  )

}

export default App
