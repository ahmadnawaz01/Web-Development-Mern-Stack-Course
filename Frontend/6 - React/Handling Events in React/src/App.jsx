import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const Changethis= ()=>{
  alert("this is hovered");
}
const [forms, setforms] = useState({names:"ahmad",phone:"6666"})

const handlech=(e)=>{
  setforms({...forms,[e.target.name]:e.target.value});
}
const [name, setname] = useState("aHMAD")
  return (
    <>
      <div>
        <button onClick={()=>{
          alert("hi this button is clicked")
        }}>Click Me</button>
        <button onMouseOver={Changethis}>HoVER THIS</button>
        <input type="text" name='names' value={forms?.names} onChange={handlech} />
        <input type="text" name='phone' value={forms?.phone} onChange={handlech} />
      </div>
    </>
  )
}

export default App
