import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex text-center justify-between bg-indigo-900 text-white '>
        <div className="logo text-center">
            <span className='font-bold text-4xl mx-8'>iTask</span>
        </div>
        <ul className='flex gap-5 m-3 px-5 justify-center'>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Your Tasks</li>
        </ul>
    </nav>
    </>

  )
}

export default Navbar
