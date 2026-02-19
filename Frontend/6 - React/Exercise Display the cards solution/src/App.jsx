import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [card, setcard] = useState([])
  const fetchdata= async ()=>{
let a =await fetch("https://jsonplaceholder.typicode.com/posts")
let data=await a.json()
setcard(data)
console.log(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  

  return (
    <>
      <div className="container">
        {
          card.map(
            (card)=>{
              return <div className="card"> 
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By : userId: {card.userId} </span>
              </div>
            }
          )
        }
      </div>
      
    </>
  )
}

export default App
