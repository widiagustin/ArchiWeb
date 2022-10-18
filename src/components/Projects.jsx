import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Projects = () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=6').then(res => {
      console.log(res.data)
      setPost(res.data)
    })
  }, [])

  return (
    <div>
      <div className='max-w-6xl mx-auto my-8 flex  justify-between'>
        <div className='items-center justify-between'>
          <h1 className='font-black text-4xl font-playfair mb-6'>Projects</h1>
          <div>
            <ul className='flex flex-col gap-4'>
              <li><a href="">All</a></li>
              <li><a href="">Furniture</a></li>
              <li><a href="">Design</a></li>
              <li><a href="">House</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className='mt-16'>
            <div className='grid grid-cols-3 gap-12'>
              {post.map((el, i) => (
                <div key={i}>
                  <img src={el.download_url} alt="abc" className='w-60 h-36 object-cover' />
                  <p>{el.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects