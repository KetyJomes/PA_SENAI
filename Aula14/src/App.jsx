import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [dog, setDog] = useState({})

  useEffect (()=>{
    getDogs();
  },[])

  const getDogs = async() => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setDog(response.data)
  }

  return (
    <>
      <img src={dog.message} alt="" />
      <div>
        <button onClick={getDogs}>Trocar imagem</button>
      </div>
    
      
    </>
  )
}

export default App
