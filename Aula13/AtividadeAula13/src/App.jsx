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
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify-center' >
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify' ></div>
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify-end'>
             <div className='bg-orange-300 w-18'></div>
          </div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
        </div>
      </div>

      <div className='h-1/3 flex justify-between'>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify'></div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify-between'>
            <div className='bg-orange-300 w-18'></div>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify-center'>
          <div className='bg-orange-300 w-18'></div></div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-16 mt-3'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify'></div>

        </div>
      </div>

      <div className='h-1/3 flex justify-between'>
        <div className="h-52 w-52 bg-blue-500">
           <div className='h-1/3 flex justify-end'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify'>
            <div className='bg-orange-300 w-18'></div>
          </div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify-center'>
            <div className='bg-orange-300 w-18'></div>
          </div>
          <div className='h-1/3 flex justify'></div>
        </div>
        <div className="h-52 w-52 bg-blue-500">
          <div className='h-1/3 flex justify-end'>
            <div className='bg-orange-300 w-18'></div></div>
          <div className='h-1/3 flex justify'></div>
          <div className='h-1/3 flex justify'></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
