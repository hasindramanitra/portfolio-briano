import React, { useEffect, useState } from 'react'
import parking from "../../assets/parking.png"
import madabel from "../../assets/madabel.png"
import { motion } from "framer-motion"
import { SlideUp } from '../../animation/animate'
import PROJECTS from '../../data/data'
import ProjectDetails from '../ProjectDetails'
import { IoClose, IoCloseCircle } from 'react-icons/io5'

export default function Projects() {

  const [currentId, setCurrentId] = useState(null);

  const [currentProject, setCurrentProject] = useState(null);



  const handleId = (idProject) => {

    // Find the object with the current `id`
    const objectToLog = PROJECTS.find(item => item.id === idProject);
    if (objectToLog) {
      setCurrentProject(objectToLog)
    }
  };

  const handleRemoveModal = () => {

  }

  return (
    <>
      <div className='bg-[#fff] font-Ibm space-y-20' id='projects'>
        <div>
          <motion.h1 variants={SlideUp(0.1)} initial="initial" whileInView={"animate"} className='text-center text-4xl md:text-7xl text-[#14213D] pt-32'>My Work</motion.h1>
          <motion.p variants={SlideUp(0.2)} initial="initial" whileInView={"animate"} className='text-center text-xl md:text-lg text-[#14213D] mt-2'>Some projects I have worked for</motion.p>
        </div>
        <div className='flex flex-wrap justify-evenly items-center'>
          {
            PROJECTS.map((project, index) => (
              <div key={index} className='box bg-white  border border-[#98999b] w-[400px] h-[520px] rounded-[2rem] pb-5 mt-4 hover:-translate-y-2 duration-300'>
                <div className='px-4 py-4 border-7 border-white rounded-[1rem] cursor-pointer'>
                  <img src={project.landingPage} alt="" className='h-[250px] w-[390px] rounded-[1rem] hover:scale-105 duration-150 border' />
                </div>
                <div className='px-4 py-4 mb-6'>
                  <span className='text-[#14213D] text-2xl font-bold'>{project.title}</span>
                  <p className='text-gray-800'>{project.miniDescription}</p>
                </div>
                <div className='flex justify-end mt-6 pr-4'>
                  <button onClick={() => handleId(project.id)} className='border-b border-[#14213D] text-[#14213D] ml-4 cursor-pointer'>Learn More</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {
        currentProject !== null && <div className={`fixed inset-0 flex justify-center items-center transition-colors ${currentProject ? "visible bg-black/20" : "invisible"}`}>
          <div className={`bg-white px-4 w-[400px] md:w-[600px] h-[600px] overflow-y-auto z-10 space-y-10 rounded-xl shadow p-6 transition-all ${currentProject ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <div className='flex justify-between'>
              <h1 className='text-[#14213D] text-5xl font-bold'>{currentProject.title}</h1>
              <div className='pt-5'>
                <IoClose className='cursor-pointer hover:rotate-90 transition-transform duration-1000' size={30} onClick={() => setCurrentProject(null)} />
              </div>
            </div>
            <img src={currentProject.landingPage} className='border rounded-lg' alt="landing page" />
            <div>
              <p className='text-white bg-gray-800 px-3 py-1 mb-3 w-[110px] rounded-md font-bold'>Description:</p>
              <p className='text-gray-800 font-medium'>{currentProject.description}</p>
            </div>
            <div>
              <p className='text-white bg-blue-800 mb-3 px-3 py-1 w-[90px] rounded-md  font-bold'>Features:</p>
              <ol className='pl-2'>
                {
                  currentProject.features.map((feature, index) => (
                    <li key={index} className='text-gray-800 font-medium'>
                      {feature}
                    </li>
                  ))
                }
              </ol>
            </div>
            <div>
              <p className='text-white bg-red-800 px-3 py-1 mb-3 w-[120px] rounded-md font-bold'>Technologies:</p>
              <div className='flex gap-10'>
                <div className='ml-4'>
                  <p className='text-white bg-orange-400 px-3 py-1 mb-3 w-[95px] rounded-md font-bold'>FrontEnd:</p>
                  <ul className='pl-2 flex flex-wrap gap-1'>
                    {
                      currentProject.fronts.map((front, index) => (
                        <li key={index} className='text-gray-800 font-medium'>
                          {front}, 
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className='ml-4'>
                  <p className='text-white bg-green-800 px-3 py-1 mb-3 w-[95px] rounded-md font-bold'>BackEnd:</p>
                  <ul className='pl-2 flex flex-wrap gap-1'>
                    {
                      currentProject.backs.map((back, index) => (
                        <li key={index} className='text-gray-800 font-medium'>
                          {back}, 
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
