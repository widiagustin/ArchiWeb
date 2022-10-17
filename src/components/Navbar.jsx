import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='flex justify-between max-w-6xl mx-auto items-center h-20'>
          <div>
            <h1 className='font-playfair text-2xl font-semibold'>ArchiWeb</h1>
          </div>
          <div>
            <ul className='flex gap-16 text-md'>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Project</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar