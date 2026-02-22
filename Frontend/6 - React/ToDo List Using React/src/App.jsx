import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componenets/Navbar'
import { v4 as uuidv4 } from 'uuid';

uuidv4();

function App() {
  const [todo, settodo] = useState("hey this is my first todo")
  const [todos, settodos] = useState([])

  useEffect(() => {
    settodo("");
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let tod = JSON.parse(todostring);
      settodos(tod);
    }
  }, [])

  const savetols = (to) => {
    localStorage.setItem("todos", JSON.stringify(to))
  }

  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    if (t.length === 0) return;
    settodo(t[0].todo);
    let newtodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newtodos);
    savetols(newtodos);
  }

  const handledelete = (e) => {
    let id = e.target.name;

    let index = todos.findIndex(item => {
      return item.id == id;
    })

    if (index === -1) return;

    let newtods = [...todos];
    newtods.splice(index, 1);
    settodos(newtods);
    savetols(newtods);
  }

  const handleadd = () => {
    let newtodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    settodos(newtodos);
    settodo("");
    savetols(newtodos);
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    if (index === -1) return;

    let newtods = [...todos];
    newtods[index].isCompleted = !newtods[index].isCompleted;
    settodos(newtods);
    savetols(newtods);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh]">
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input onChange={handlechange} value={todo} type="text" className='bg-white w-1/2' />
          <button onClick={handleadd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 font-bold text-sm text-white rounded-md mx-6'>Save</button>
        </div>
        <h2 className='font-bold text-lg'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5  '>No Todos to Display</div>}
          {todos.map(item => {

            return <div key={item.id} className="todo w-1/2 justify-between flex">
              <div className='flex gap-5'>
                <input
                  name={item.id}
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={handlecheckbox}
                />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons">
                <button name={item.id} onClick={(e) => handleedit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 font-bold text-sm text-white rounded-md mx-1'>Edit</button>
                <button name={item.id} onClick={handledelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 font-bold text-sm text-white rounded-md mx-1'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App