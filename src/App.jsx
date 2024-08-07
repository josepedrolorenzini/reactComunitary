import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p><img src={reactLogo} alt="React logo" /></p>
    <p><img src={viteLogo} alt="Vite logo" /></p>
    <p className='flex'>
      <button onClick={() => setCount(count + 1)} className='flex'>
        Click me {count}
      </button>
    </p>
    </>
  )
}

export default App
