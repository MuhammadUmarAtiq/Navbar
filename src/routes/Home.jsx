import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import Footer from '../components/Footer'
import ProjectData from "../components/ProjectData"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProjectData/>
      <Footer/>
    </div>
  )
}

export default Home