import React from 'react'
import "./ProjectCard.css";

const ProjectCard = ({img ,title, text ,view,source}) => {
  return (
    <>
        
                    <div className='project-card'>
                        <img src={img} alt='imagee'/>
                        <h2 className='project-title'>{title}</h2>
                        <div className='project-details'>
                                <p>{text}</p>
                            <div className='pro-btns'>
                                <a target='_blank' href={view} className="btn"> View</a>
                                <a target='_blank' href={source} className="btn"> Source</a>

                            </div>
                        </div>
                    </div>
                
    </>
  )
}
export default ProjectCard;