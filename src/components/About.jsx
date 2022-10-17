import React, { useState } from 'react'
import AboutImg from '../assets/about-img.png'

const About = () => {
  const ReadMore = ({ children }) => {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toogleReadMore = () => {
      setIsReadMore(!isReadMore)
    }
    return (
      <p className='text'>
        {isReadMore ? text.slice(0, 200) : text}
        <span onClick={toogleReadMore} className="cursor-pointer text-dark-green">
          {isReadMore ? "...read more" : "show less"}
        </span>
      </p>
    )
  }
  return (
    <div>
      <div className='flex max-w-5xl mx-auto my-16 gap-16'>
        <div>
          <img src={AboutImg} alt="" className='w-[520px] h-96 object-cover' />
        </div>
        <div className='mt-8'>
          <h1 className='font-black text-4xl font-playfair mb-6'>About Us</h1>
          <p className='w-72'>
            <ReadMore>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequuntur ad nam alias, fugit porro vero ab quasi explicabo? Ipsum a assumenda magnam laborum voluptate sit dicta corporis, veritatis non aspernatur, placeat natus fuga odio odit maxime. Non earum ratione rerum eum veritatis perferendis ipsum. Accusantium assumenda praesentium, optio deleniti ducimus quo nulla repellendus illo, corrupti, enim ab totam dignissimos molestias? Perspiciatis, a excepturi. Sunt reprehenderit blanditiis, consequatur error perspiciatis id placeat perferendis sequi at, eum voluptates velit praesentium deserunt consectetur accusantium illo omnis ea exercitationem numquam, aperiam rem atque non distinctio! Dicta minus perspiciatis ratione quia doloribus. Fugit, provident.
            </ReadMore>
          </p>
        </div>
      </div>
    </div >
  )
}

export default About