import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='flex justify-between max-w-6xl mx-auto items-center h-20'>
          <div>
            <Link to='/' className='font-playfair text-2xl font-semibold'>ArchiWeb</Link>
          </div>
          <div>
            <ul className='flex gap-16 text-md'>
              <Link to='/'>Home</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/about'>About</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar