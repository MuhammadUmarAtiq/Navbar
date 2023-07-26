import React from 'react'
import "./ProjectCard.css"
import { NavLink } from 'react-router-dom'

const ProjectCard = ({img ,title, text ,view}) => {
  return (
    <>
        
                    <div className='project-card'>
                        <img src={img} alt='imagee'/>
                        <h2 className='project-title'>{title}</h2>
                        <div className='project-details'>
                                <p>{text}</p>
                            <div className='pro-btns'>
                                <NavLink target='_blank' to={view} className="btn"> View</NavLink>
                                <NavLink to={view} className="btn"> Source</NavLink>

                            </div>
                        </div>
                    </div>
                
    </>
  )
}
export default ProjectCard;