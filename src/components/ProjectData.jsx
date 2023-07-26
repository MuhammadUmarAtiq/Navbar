import React from 'react'
import "./ProjectCard.css"
import ProjectCard from './ProjectCard'
import Data from './Data'
const ProjectData = () => {
  return (
    <>
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
                <div className='project-container'>
                    {Data.map((item,index)=>{
                            return<>
                                <ProjectCard
                                key={index}
                                 img={item.imgsrc}
                                 title={item.title} 
                                 text={item.text} 
                                 view={item.view}/>
                            </>
                    })}
                </div>
        </div>
    </>
  )
}

export default ProjectData;