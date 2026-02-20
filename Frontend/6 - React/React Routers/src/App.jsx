import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
 const router= createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/><Home/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/></>
  },
  {
    path:"/user/:username",
    element:<><Profile/></>
  },
 ])
  return (
    <>
    <div>he he ho ho</div>
    
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
