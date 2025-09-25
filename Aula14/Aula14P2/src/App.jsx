import {useEffect, useState } from 'react'
import List from './pages/List'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<List></List>}></Route>
       <Route path='/profile' element={<Profile></Profile>}></Route>
     </Routes>
    </BrowserRouter>
   

     
      
    </>
  )
}

export default App

