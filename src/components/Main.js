import React from 'react'


import Profile from './Profile';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
const Main = () => {
  return (
    <main className="relative mt-28">
    
    <Profile/>
    <Projects/>
    <Technologies/>
    <About/>
  </main>
  )
}

export default Main