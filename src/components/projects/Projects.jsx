import React from 'react'
import parking from "../../assets/parking.png"
import madabel from "../../assets/madabel.png"
import { motion } from "framer-motion"
import { SlideUp } from '../../animation/animate'

export default function Projects() {
  return (
    <>
      <div className='bg-[#fff] font-Ibm space-y-20' id='projects'>
        <div>
          <motion.h1 variants={SlideUp(0.1)} initial="initial" whileInView={"animate"} className='text-center text-4xl md:text-7xl text-[#14213D] pt-32'>My Work</motion.h1>
          <motion.p variants={SlideUp(0.2)} initial="initial" whileInView={"animate"} className='text-center text-xl md:text-lg text-[#14213D] mt-2'>Some projects I have worked for</motion.p>
        </div>
        <div className='flex flex-wrap justify-evenly items-center'>
          <div className='box bg-white  border border-[#98999b] w-[400px] h-[520px] rounded-[2rem] pb-5 mt-4 cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='px-4 py-4 border-7 border-white rounded-[1rem] cursor-pointer'>
              <img src={parking} alt="" className='h-[250px] w-[390px] rounded-[1rem] hover:scale-105 duration-150 border' />
            </div>
            <div className='px-4 py-4'>
              <span className='text-[#14213D] text-2xl font-bold'>Park'In</span>
              <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore quisquam nemo porro rerum accusamus, voluptatibus perspiciatis vitae! Pariatur cumque...</p>
            </div>
            <a href="#" className='inline-block border-b border-[#14213D] text-[#14213D] ml-4'>Learn More</a>
          </div>
          <div  className='box bg-white  border border-[#98999b] w-[400px] h-[520px] rounded-[2rem] pb-5 mt-4 cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='px-4 py-4 border-7 border-white rounded-[1rem] cursor-pointer'>
              <img src={madabel} alt="" className='h-[250px] w-[390px] rounded-[1rem] hover:scale-105 duration-150' />
            </div>
            <div className='px-4 py-4'>
              <span className='text-[#14213D] text-2xl font-bold'>Park'In</span>
              <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore quisquam nemo porro rerum accusamus, voluptatibus perspiciatis vitae! Pariatur cumque...</p>
            </div>
          </div>
          <div className='box bg-white  border border-[#98999b] w-[400px] h-[520px] rounded-[2rem] pb-5 mt-4 cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='px-4 py-4 border-7 border-white rounded-[1rem] cursor-pointer'>
              <img src={parking} alt="" className='h-[250px] w-[390px] rounded-[1rem] hover:scale-105 duration-150' />
            </div>
            <div className='px-4 py-4'>
              <span className='text-[#14213D] text-2xl font-bold'>Park'In</span>
              <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore quisquam nemo porro rerum accusamus, voluptatibus perspiciatis vitae! Pariatur cumque...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
