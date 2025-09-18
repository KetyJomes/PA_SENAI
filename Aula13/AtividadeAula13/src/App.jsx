import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* h-screen é a altura da tela*/}
    <div className="h-screen">
      <div className='h-1/3 flex justify-between'>{/*  é o pai */}
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
      </div>

      <div className='h-1/3 flex justify-between'>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
      </div>

      <div className='h-1/3 flex justify-between'>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
        <div className="h-52 w-52 bg-blue-500"></div>
      </div>
    </div>

    </>
  )
}

export default App
