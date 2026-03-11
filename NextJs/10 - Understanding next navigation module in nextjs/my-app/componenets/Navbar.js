"use client"
import React from 'react'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

const Navbar = () => {
    const pathname=usePathname();
    const userouter=useRouter()
  return (
    <>
    <div>Navbar
        <div>you are inside {pathname}</div>
    </div>
        <button onClick={()=>userouter.push('/about')}>dashboard</button>
    </>
  )
}

export default Navbar