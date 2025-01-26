
import React from 'react'
import {FaReact, FaSymfony } from 'react-icons/fa6';
import { SiSpring, SiTailwindcss } from "react-icons/si";
import java from "../assets/java.png";
import php from "../assets/php.png";
import js from "../assets/js.png";
import mysql from "../assets/programing.png";
import postgresql from "../assets/postgresql.png";
import css from "../assets/css-3.png";
import git from "../assets/social.png";
import datas from "../assets/hierarchical.png";
import { motion } from 'framer-motion';
import { SlideUp, SlideLeft } from '../animation/animate';

export default function Skills(){

    return <>
        <div className='mt-16 md:mt-32 space-y-20' id="skills">
                <motion.h1 variants={SlideUp(0.1)} initial="initial" whileInView={"animate"} className='text-center text-4xl text-[#14213D] md:text-7xl'>My Skills</motion.h1>
                <div className='space-y-8'>
                    <div className='flex flex-wrap justify-evenly text-[#14213D] items-center'>
                        <motion.div variants={SlideLeft(0.2)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={css} alt="" className='w-[50px] mt-[-10px]' />
                            <p className='md:text-lg font-semibold pl-2'>CSS3</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.3)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <SiTailwindcss className='text-blue-400 text-4xl' />
                            <p className='md:text-lg font-semibold ml-[-20px]'>Tailwindcss</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.4)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={js} alt="" className='w-[40px] mt-[-3px]' />
                            <p className='md:text-lg font-semibold ml-[-20px]'>Javascript</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.5)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <FaReact className='text-blue-500 text-4xl' />
                            <p className='md:text-lg font-semibold ml-[-10px]'>ReactJs</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap justify-evenly text-[#14213D] items-center'>
                        <motion.div variants={SlideLeft(0.6)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={php} alt="" className='w-[50px] mt-[-10px]' />
                            <p className='md:text-lg font-semibold pl-2'>PHP</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.7)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <FaSymfony className='text-violet-900 bg-black rounded-full text-4xl' />
                            <p className='md:text-lg font-semibold ml-[-15px]'>Symfony</p>
                        </motion.div>

                        <motion.div variants={SlideLeft(0.8)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={java} alt="" className='w-[40px] mt-[-5px]' />
                            <p className='md:text-lg font-semibold'>JAVA</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(0.9)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <SiSpring className='text-green-500 bg-white rounded-full text-4xl' />
                            <p className='md:text-lg font-semibold ml-[-5px]'>Spring</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap justify-evenly text-[#14213D] items-center'>
                        <motion.div variants={SlideLeft(1.0)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={mysql} alt="" className='w-[40px]' />
                            <p className='md:text-lg font-semibold'>MySQL</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.1)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={postgresql} alt="" className='w-[40px]' />
                            <p className='md:text-lg ml-[-15px] font-semibold'>PostgreSQL</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.2)} initial="initial" whileInView={"animate"} className='flex flex-col'>
                            <img src={git} alt="" className='w-[40px]' />
                            <p className='md:text-lg ml-[-15px] font-semibold'>Git/Github</p>
                        </motion.div>
                        <motion.div variants={SlideLeft(1.3)} initial="initial" whileInView={"animate"} className='flex flex-col pr-4'>
                            <img src={datas} alt="" className='w-[40px]' />
                            <p className='md:text-lg font-semibold'>DSA</p>
                        </motion.div>
                    </div>
                </div>
            </div>
    </>
}