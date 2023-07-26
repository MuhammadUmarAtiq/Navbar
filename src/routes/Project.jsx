import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from "../components/Hero2"
import PriceCard from '../components/PriceCard'
import ProjectData from '../components/ProjectData'

const Project = () => {
  return (
    <>
      <Navbar/>
      <Hero2 heading=" PROJECTS" para="Some of my most recent works"/>
        <ProjectData/>
      <PriceCard/>
      <Footer/>
    </>
  )
}

export default Project