import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {User} from './pages/User'

const App = () => {

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/user/:id' element = {<User/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
