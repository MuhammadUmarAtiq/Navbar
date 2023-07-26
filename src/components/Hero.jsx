import React from "react";
import "./Hero.css"
import img1 from "../images/programing2.jpg"
import { Link } from "react-router-dom";
const Hero=()=>{
    return<>
<div className="hero">
<div className="mask">
<img className="intro-img" src={img1} alt="introImg"/>
</div>
<div className="content">
    <p>hi, i'm umar atiq </p>
    <h1>React Developer</h1>
    <div>
        <Link to="/project" className="btn"> projects</Link>
        <Link to="/contact" className="btn btn-light"> contact</Link>
    </div>

</div>
</div>
    </>
}
export default Hero;