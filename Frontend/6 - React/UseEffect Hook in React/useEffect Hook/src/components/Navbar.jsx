import React from 'react'
import { useEffect} from 'react'

const navbar = (c) => {
  useEffect(() => {
    alert("color was changed")
    return ()=>{
      alert("this was unmounted")
    }
  }, [c.color])
  
  return (
    <div>
      i am navabr {c.color}
    </div>
  )
}

export default navbar

