import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[visibilty, setVisibility] = useState(true) //A VISIBILIDADE DA NOSSA DIV VAI SER TRUE - ex01
  const [cor, setCor] = useState("gray")// ex02
  const [count, setCount] = useState(0)
  const [decCount, setDecCount ] = useState(0)

  const IncrementaDec = () => {
    setCount(count => count + 1)
    if(count % 10 === 0){
      setDecCount(decCount => decCount +1)
    }
  }

  return (
    <>
    { visibilty &&
      <div>
        <h2>1 - Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h2>

      </div>
    }

        <div>
          <button onClick={() => {setVisibility(visibilty == true ? false : true)}}> 
            Alterar visibilidade 
          </button>
        </div>
  
    <div style={{ backgroundColor: cor, color: 'white'}}>
      <h2>2 - Faça um botão que altere a cor de fundo de uma div </h2>
    </div>

    <button onClick={() => {setCor(cor == "gray" ? "purple" : "gray")}}> 
      Alterar cor 
    </button>
  

    <div>
      <h2>3 - Exiba um contador que a cada dez cliques atualiza de 1 em 1 na tela.</h2>
       Contador : {decCount} 
    </div>
      
    <button onClick={IncrementaDec}> 
      Adicionar + 1 ao contador
    </button>
      

 
    </>
  );
}

export default App;


