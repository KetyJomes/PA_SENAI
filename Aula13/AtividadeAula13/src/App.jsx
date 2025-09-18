import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-screen flex justify items">
        <div className='w-52 h-52 bg-blue-500'></div>
     </div>
     <div className='h-screen flex justify-between items'>
      <div className='w-52 h-52 bg-blue-500'></div>
     </div>
    </>
  )
}

export default App
