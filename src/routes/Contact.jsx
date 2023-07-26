import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Hero2 heading="Contact Us" para="Lets have a chat" />
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact