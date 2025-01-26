import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import br from '../../assets/Br.png'
import { motion } from 'framer-motion'


export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }


  return (
    <>
      <div
        className='fixed w-full top-0'>
        <div

          className='flex justify-between items-center px-3 md:px-24 bg-[#182a52]'>
          <motion.div initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }} className='text-white'>
            <img src={br} alt="" width={60} height={60} />
          </motion.div>
          <motion.ul
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className='hidden md:flex gap-14 font-Ibm text-[#F5BD02]'>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="active"
                duration={500} className='nav cursor-pointer'>Home</Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="active"
                duration={500} className='nav cursor-pointer'>Skills</Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="active"
                duration={500} className='nav cursor-pointer'>Projects</Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                activeClass="active"
                className='nav cursor-pointer'>Contact</Link>
            </li>
          </motion.ul>
          {
            nav && <motion.ul
              className='bg-[#182a52] block md:hidden w-full font-Ibm absolute top-10 right-0 text-[#F5BD02] space-y-3 py-3 text-center mt-[20px]'
              initial={{ y: '-100%', opacity: 0 }} // Start above the screen
              animate={{ y: 0, opacity: 1 }} // Move into position and fade in
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="active"
                  duration={500} className='nav cursor-pointer'>Home</Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="active"
                  duration={500} className='nav cursor-pointer'>Skills</Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="active"
                  duration={500} className='nav cursor-pointer'>Projects</Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  activeClass="active"
                  className='nav cursor-pointer'>Contact</Link>
              </li>
            </motion.ul>
          }
          <div className='block md:hidden text-[#F5BD02] text-2xl cursor-pointer duration-500 border-2 border-[#F5BD02] rounded-md p-3' onClick={handleNav}>
            {
              nav ? <IoClose /> : <FaBars />
            }

          </div>
        </div>
      </div >

    </>
  )
}
