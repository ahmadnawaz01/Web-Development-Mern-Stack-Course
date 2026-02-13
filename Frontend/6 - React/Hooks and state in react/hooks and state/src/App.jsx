import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [c, setc] = useState(10)

  return (
    <>
      <div>The count is {c}</div>
      <button onClick={()=>{ setc(c+1)}}>Update Count</button>
    </>
  )
}

export default App
