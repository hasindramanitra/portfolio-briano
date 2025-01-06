import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <>
      <main className='relative'>
        <Navbar />
        <Home />
        <Projects/>
        {/* <About/> */}
        <Contact/>
      </main>
    </>
  )
}
