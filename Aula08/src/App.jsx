import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [cor, setCor] = useState("black")

  return (
    <>
      <h1>02 Atividade</h1>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: cor
        }}
       
      ></div>
      
      <button onClick={() => setCor("blue")}>
        Mudar cor
      </button>
    </>
  );
}

export default App;


