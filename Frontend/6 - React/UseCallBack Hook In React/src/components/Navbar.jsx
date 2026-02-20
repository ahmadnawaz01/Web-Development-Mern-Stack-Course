import React from 'react'
import { memo } from 'react'

const Navbar = ({adj,getadj}) => {
    console.log("navbar is rendered");
    
  return (
    <>
    <div>
      i am {adj} adjective
    </div>
    <button onClick={()=>{getadj}}>click me</button>
    </>
    
  )
}

export default memo(Navbar)