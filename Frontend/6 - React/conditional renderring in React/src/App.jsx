import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setbtn] = useState(false)
  const [listt, setlistt] = useState([{
    title : "this is todo1",
    desc :"this is desc 1 todo"
  },
  {
    title : "this is todo2",
    desc :"this is desc 2 todo"
  },
  {
    title : "this is todo3",
    desc :"this is desc 3 todo"
  }
  ])
  const Todo = (todo) => {
    return (
      <><div>
        <h3>{todo.title} t</h3>
        <h4>{todo.desc} d</h4></div></>

    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {btn&&<button>this is shown when we click on other button</button>} */}
      {btn ? <button>this is button shown when click on the other button</button> : <button>this is false</button>}
      <div className="card">
        <button onClick={() => setbtn(!btn)
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {listt.map(todo=>{
          return <Todo  key={todo.title} title={todo.title} desc={todo.desc}/>
        })}
        <Todo />
      </div>
      <p className="read-the-docs">
        Click on the Vite and Reaclogos to learn more
      </p>

    </>
  )
}

export default App
