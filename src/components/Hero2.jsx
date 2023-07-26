import React from 'react'
import "./Hero2.css"

const Hero2 = ({heading ,para}) => {
  return (
    <>
        <div className='hero-img'>
            <div className=' heading'>
        <h1>{heading}</h1>
        <p>{para}</p>
            </div>
        </div>
    </>
  )
}

export default Hero2