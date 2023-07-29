import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Prueba } from './components/prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Prueba/>
    </>
  )
}

export default App
