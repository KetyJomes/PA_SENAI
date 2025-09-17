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
        <Route path='/' element = {<Home />} />
        <Route path="/about" element={<About />} />      
      </Routes>  
    </BrowserRouter>
  )

}

export default App
