import React from 'react'
// import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone,  FaTwitter } from "react-icons/fa"
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location' >
                        {/* <FaHome size={30} style={{ color: "white", marginRight: "2rem" ,}} /> */}
                        <div>
                            <p>St5 / H12 Bhogiwal BhaghbanPura Lahore</p>
                            <p>Pakistan.</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            {/* <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} /> */}
                    +923454262055</h4>
                    </div>
                    <div className='email'>
                        <h4>
                            {/* <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} /> */}
                            umaratiq5555@gmail.com </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>I'm fresh graduate and I did an internship on React JS at Digiware Solutions. In my three to four months experience I learnt the basics of HTML, CSS, JAVASCRIPT and focused more on React JS.</p>
                    <div className='social'>
                    
                    <Link target='_blank' to="https://www.linkedin.com/in/nimz-4262055u/">
                    {/* <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} /> */}
                    </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer