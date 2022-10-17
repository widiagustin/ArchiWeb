import React from 'react'
import HeroImg from '../assets/hero-img.png'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { RiPenNibLine } from 'react-icons/ri'

const Dashboard = () => {
  return (
    <div id='Home'>
      <div className='mt-6'>
        <div className='bg-gray-100 w-[41rem] relative h-80 bg-opacity-50 z-50 top-20 p-14'>
          <div className='ml-12'>
            <h1 className='font-playfair text-4xl font-black leading-normal'>Best Solution <br /> For
              Your Home</h1>
            <p className='w-80 font-extralight text-black mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
              lorem ipsum.</p>
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="Hero Landing" className='w-[747px] h-[520px] object-cover absolute right-0 top-24' />
        </div>
      </div>
      <div>
        <div className='bg-[#D3DBDB] w-full mt-48'>
          <div className='mx-auto max-w-5xl items-center justify-center p-8'>
            <h1 className='font-playfair text-3xl font-black mb-10 text-center'>Our Services</h1>
            <div className='flex mx-auto text-center align-center justify-around'>
              <div>
                <div className='rounded-full w-16 h-16 bg-dark-green relative mx-auto'>
                  <HiOutlineDocumentText className='absolute z-10 left-[1rem] top-[1rem] text-white' size={30} />
                </div>
                <h1 className='font-playfair font-black text-xl mt-1'>Planning</h1>
                <p className='font-playfair text-sm mt-2'>Our Services Line one <br />Servive line two</p>
              </div>
              <div>
                <div className='rounded-full w-16 h-16 bg-dark-green relative mx-auto'>
                  <AiOutlineHome className='absolute z-10 left-[1rem] top-[1rem] text-white' size={30} />
                </div>
                <h1 className='font-playfair font-black text-xl mt-1'>Interior</h1>
                <p className='font-playfair text-sm mt-2'>Our Services Line one <br />Servive line two</p>
              </div>
              <div>
                <div className='rounded-full w-16 h-16 bg-dark-green relative mx-auto'>
                  <RiPenNibLine className='absolute z-10 left-[1rem] top-[1rem] text-white' size={30} />
                </div>
                <h1 className='font-playfair font-black text-xl mt-1'>Exterior</h1>
                <p className='font-playfair text-sm mt-2'>Our Services Line one <br />Servive line two</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Dashboard