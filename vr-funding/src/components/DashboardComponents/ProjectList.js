import React from 'react';

import ProjectCard from './ProjectCard';

export default function ProjectList(props) {
    return (
        <div className="project-list-container">
            {props.projects.map((project, index) => {
                return (
                    <ProjectCard project={project} key={index} />
                )
            })}
        </div>
    )  
}