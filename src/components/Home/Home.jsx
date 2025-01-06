import React, { useRef } from 'react'
import {FaReact, FaSymfony } from 'react-icons/fa6';
import { SiSpring, SiTailwindcss } from "react-icons/si";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import js from "../../assets/js.png";
import mysql from "../../assets/programing.png";
import postgresql from "../../assets/postgresql.png";
import css from "../../assets/css-3.png";
import git from "../../assets/social.png";
import datas from "../../assets/hierarchical.png";
import { motion } from 'framer-motion';
import { SlideUp, SlideLeft } from '../../animation/animate';

export default function Home() {

    return (
        <>
            <div className='section1 w-full font-Ibm ' id='home'>
                <div className='hidden md:flex md:justify-evenly items-center pt-40'>
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
                                className='text-white text-xl'><span className='text-[#F5BD02] text-6xl mr-2'>PHP/Symfony</span>Developer</motion.h2>
                            <motion.p
                                variants={SlideUp(0.7)}
                                initial="initial"
                                animate="animate"
                                className='text-gray-200'>Let's work together to make your imagination a reality.<br />Any kind of web application; You want it, I do it for You.</motion.p>
                        </div>
                        <div className='flex gap-16'>
                            <motion.a
                                variants={SlideUp(0.9)}
                                initial="initial"
                                animate="animate"
                                href='#contact'
                                className='primary-btn bg-[#F5BD02] hover:bg-white shadow-[5px_5px_0px_0px_#FFFFFF] hover:shadow-[5px_5px_0px_0px_#F5BD02]'
                                >Contact Me</motion.a>
                            <motion.button
                                variants={SlideUp(1.2)}
                                initial="initial"
                                animate="animate"
                                className='primary-btn'>Download My CV</motion.button>
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
                        <h2 className='text-white text-xl'><span className='text-[#F5BD02] text-3xl mr-2'>PHP/Symfony</span>Developer</h2>
                        <p className='text-gray-200'>Let's work together to make your imagination a reality.<br />Any kind of web application; You want it, I do it for You.</p>
                    </div>
                    <div className='flex gap-16 justify-center'>
                        <button className='primary-btn bg-[#F5BD02] hover:bg-white shadow-[5px_5px_0px_0px_#FFFFFF] hover:shadow-[5px_5px_0px_0px_#F5BD02]'>Contact Me</button>
                        <button className='primary-btn'>Download My CV</button>
                    </div>
                </div>
            </div>
            <div className='mt-16 md:mt-32 space-y-20' id='skills' >
                <motion.h1 variants={SlideUp(0.1)} initial="initial" whileInView={"animate"} className='text-center text-4xl text-white md:text-7xl'>My Skills</motion.h1>
                <div className='space-y-8'>
                    <div className='flex flex-wrap justify-evenly text-gray-100 items-center'>
                        <motion.div variants={SlideLeft(0.2)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={css} alt="" className='w-[50px] mt-[-10px]' />
                            <p className='md:text-lg pl-2'>CSS3</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.3)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <SiTailwindcss className='text-blue-400 text-4xl' />
                            <p className='md:text-lg ml-[-20px]'>Tailwindcss</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.4)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={js} alt="" className='w-[40px] mt-[-3px]' />
                            <p className='md:text-lg ml-[-20px]'>Javascript</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.5)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <FaReact className='text-blue-500 text-4xl' />
                            <p className='md:text-lg ml-[-10px]'>ReactJs</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap justify-evenly text-gray-100 items-center'>
                        <motion.div variants={SlideLeft(0.6)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={php} alt="" className='w-[50px] mt-[-10px]' />
                            <p className='md:text-lg pl-2'>PHP</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.7)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <FaSymfony className='text-violet-900 bg-black rounded-full text-4xl' />
                            <p className='md:text-lg ml-[-15px]'>Symfony</p>
                        </motion.div>

                        <motion.div variants={SlideLeft(0.8)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={java} alt="" className='w-[40px] mt-[-5px]' />
                            <p className='md:text-lg'>JAVA</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.9)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <SiSpring className='text-green-500 bg-white rounded-full text-4xl' />
                            <p className='md:text-lg ml-[-5px]'>Spring</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap justify-evenly text-gray-100 items-center'>
                        <motion.div variants={SlideLeft(1.0)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={mysql} alt="" className='w-[40px]' />
                            <p className='md:text-lg'>MySQL</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.1)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={postgresql} alt="" className='w-[40px]' />
                            <p className='md:text-lg ml-[-15px]'>PostgreSQL</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.2)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={git} alt="" className='w-[40px]' />
                            <p className='md:text-lg ml-[-15px]'>Git/Github</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.3)} initial="initial" whileInView={"animate"} className='flex flex-col pr-4'>
                            <img src={datas} alt="" className='w-[40px]' />
                            <p className='md:text-lg'>DSA</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
