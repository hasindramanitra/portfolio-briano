import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <main className='relative'>
        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
        {/* <About/> */}
        <Contact/>
      </main>
    </>
  )
}
