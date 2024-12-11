import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
     
    </>
  )
}

export default App
