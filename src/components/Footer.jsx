import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-48 absolute bg-[#2E2F32] text-white p-5'>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div>
            <h1 className='font-playfair font-bold text-2xl mb-3'>ArchiWeb</h1>
            <p className='w-64 text-sm'>Archiweb is an architectural consultant based in Berlin, Germany. We provide solutions for your architecture and residential design
            </p>
            <div className='flex gap-5 mt-3'>
              <a href="https://web.facebook.com/" target="_blank" rel="noreferrer"> <AiFillFacebook /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"> <AiOutlineTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <AiOutlineInstagram /></a>
            </div>
          </div>
          <div>
            <h1 className='font-semibold text-lg mb-3'>Articles</h1>
            <ul className='text-sm'>
              <li>7 Tips for Kids Friendly
                Interior Design</li>
              <li>Smart Tips for Changing
                a Room
              </li>
              <li>
                Eco-friendly design</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-lg mb-3'>Links</h1>
            <ul className='text-sm'>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer