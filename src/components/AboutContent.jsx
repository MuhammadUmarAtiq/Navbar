import React from 'react'
import "./AboutContent.css"
import img from "../images/programing10.jpg"
import img2 from "../images/programing13.jpg"
import { Link } from 'react-router-dom'
function AboutContent() {
  return (
   <>
    <div className='about'></div>
    <div className='left'>
         <h1>Who Am I?</h1>
         <p>Im a React Front-end developer.</p>
         <p>i am fresh graduate and I did an internship on React JS at Digiware Solutions. In my three to four months experience I learnt the basics of HTML, CSS, JAVASCRIPT and focused more on React JS.</p>
    <Link to="/contact" ><button className='btn'> Contact</button></Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={img2} alt='images' className='img'/>
            </div>
            <div className='img-stack bottom'>
                <img src={img} alt='images' className='img'/>
            </div>
        </div>
    </div>
   </>
  )
}

export default AboutContent