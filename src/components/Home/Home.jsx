import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import { SlideUp, SlideLeft } from '../../animation/animate';

export default function Home() {

    return (
        <>
            <div className='section1 w-full font-Ibm ' id='home'>
                <div className='hidden md:flex md:justify-evenly items-center md:pt-40'>
                    <div className='space-y-12'>
                        <div className='space-y-3'>
                            <motion.h5
                                variants={SlideUp(0.2)}
                                initial="initial"
                                animate="animate"
                                className='text-white text-xl'>Hello, I'am </motion.h5>
                            <motion.span
                                variants={SlideUp(0.4)}
                                initial="initial"
                                animate="animate"
                                className='text-[#F5BD02] text-6xl'>Briano</motion.span>
                            <motion.h2
                                variants={SlideUp(0.5)}
                                initial="initial"
                                animate="animate"
                                className='text-white text-xl'><span className='text-[#F5BD02] text-6xl mr-2'>FullStack</span>Developer</motion.h2>
                            <motion.p
                                variants={SlideUp(0.7)}
                                initial="initial"
                                animate="animate"
                                className='text-gray-200'>Helps You explode the image and automate the tasks of your activity<br />with web or mobile applications developed with several languages and programming tools.</motion.p>
                        </div>
                        <div className='flex gap-16'>
                            <motion.a
                                variants={SlideUp(0.9)}
                                initial="initial"
                                animate="animate"
                                href='#contact'
                                className='primary-btn bg-[#F5BD02] hover:bg-white shadow-[5px_5px_0px_0px_#FFFFFF] hover:shadow-[5px_5px_0px_0px_#F5BD02]'
                                >Download My CV</motion.a>
                        </div>
                    </div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='bg-white w-[400px] h-[400px] rounded-full'>

                </motion.div>
            </div>
            <div className='flex md:hidden flex-col pt-32'>
                <div className='space-y-12'>
                    <div className='flex justify-center'>
                        <img src="" alt="" className='bg-white w-[200px] h-[200px] rounded-full' />
                    </div>
                    <div className='space-y-3 text-center'>
                        <h5 className='text-white text-lg'>Hello, I'am </h5>
                        <span className='text-[#F5BD02] text-3xl'>Briano</span>
                        <h2 className='text-white text-xl'><span className='text-[#F5BD02] text-3xl mr-2'>FullStack</span>Developer</h2>
                        <p className='text-gray-200'>Helps You explode the image and automate the tasks of your activity<br />with web or mobile applications developed with several languages and programming tools.</p>
                    </div>
                    <div className='flex gap-16 justify-center'>
                        <button className='primary-btn bg-[#F5BD02] hover:bg-white shadow-[5px_5px_0px_0px_#FFFFFF] hover:shadow-[5px_5px_0px_0px_#F5BD02]'>Download My CV</button>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
