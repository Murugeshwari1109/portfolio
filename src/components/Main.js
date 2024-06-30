import React from 'react'


import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
const Main = () => {
  return (
    <main className="relative mt-28">
    
    <Profile/>
    <Education />
    <Skills />
    <Projects/>
    <Contact />
  </main>
  )
}

export default Main