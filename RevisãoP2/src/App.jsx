import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Botao}  from './components/Botao'

// function App() {                                  USESTATE
//   const [value, setValue] = useState(0)
//   const [text, setText] = useState()
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>+</button>
//       {value}
//       <button onClick={() => setValue(value - 1)}>-</button>

//       <br />

//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <h1>{text}</h1>

//       <br />

//       <button onClick={() => setShow(!show)}>Alternar visibilidade</button>
//       {show &&
//       <div style={{backgroundColor: 'blueviolet', width: '200px', height: '200px'}}></div>}

//     </>
//   )
// }

// export default App

{/* <> </> é um fragmento usado para retornar mais de um valor  */}




// function App() {                                      USEEFFECT
//   const [value, setValue] = useState(0)
//   const [text, setText] = useState()
//   const [show, setShow] = useState(true)

//   useEffect(() => {
//     console.log('Testando o Text')
//   },[text])

//    useEffect(() => {
//     console.log('Testando o Value')
//   },[value])

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>+</button>
//       {value}
//       <button onClick={() => setValue(value - 1)}>-</button>

//       <br />

//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <h1>{text}</h1>

//       <br />

//       <button onClick={() => setShow(!show)}>Alternar visibilidade</button>
//       {show &&
//       <div style={{backgroundColor: 'blueviolet', width: '200px', height: '200px'}}></div>}

//     </>
//   )
// }

// export default App




// function Pessoa({nome, sobrenome, idade}){              PROPS
//   return(
//     <>
//     <h1>Nome: {nome} </h1>
//     <h1>Sobrenome: {sobrenome}</h1>
//     <h1>Idade: {idade}</h1>
//     </>
//   )
// }

// function App() {
//   const [value, setValue] = useState(0)
//   const [text, setText] = useState()
//   const [show, setShow] = useState(true)

//   useEffect(() => {
//     console.log('Testando o Text')
//   },[text])

//    useEffect(() => {
//     console.log('Testando o Value')
//   },[value])

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>+</button>
//       {value}
//       <button onClick={() => setValue(value - 1)}>-</button>

//       <br />

//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <h1>{text}</h1>

//       <br />

//       <button onClick={() => setShow(!show)}>Alternar visibilidade</button>
//       {show &&
//       <div style={{backgroundColor: 'blueviolet', width: '200px', height: '200px'}}></div>}

//       <Pessoa nome='Ketlyn' sobrenome='Jomes' idade="20"/>
//       <Pessoa nome='Maria' sobrenome='Jomes' idade="13"/>

//     </>
//   )
// }

// export default App



// function App() {                                      PROPS/2

//   return (
//     <>

//       <Botao cor='purple' conteudo="Login" altura="50px" largura="200px"></Botao>
//       <br />
//       <br />
//       <Botao cor='gray' conteudo="Cadastro" altura="50px" largura="100px"></Botao>

//     </>
//   )
// }

// export default App