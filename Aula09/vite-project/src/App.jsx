import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("O conteúdo da página foi alterado")
    console.log(`O novo estado da variável é ${num}`)
  }, [num])

  return (
    <>
    <button onClick={() => setNum(num => num + 1)}> Incrementar um valor de número</button>
    <h1>{num}</h1>
    </>
  )
}

export default App
