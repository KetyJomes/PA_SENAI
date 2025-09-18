import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {User} from './pages/User'
import { Product } from './pages/Product'
import { UserList } from './pages/UserList'
import { UserPage } from './pages/UserPage'

const App = () => {

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/user/:id' element = {<User/>} />
      <Route path='/product/:category/:id' element = {<Product/>} />
      <Route path='/userlist' element = {<UserList />} ></Route>
      <Route path='/userlist/:id' element = {<UserPage/>} ></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
