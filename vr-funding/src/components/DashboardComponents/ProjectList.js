import React from 'react';

export default function ProjectList(props) {
    // console.log(props.projects)
    return (
        
        <div className="project-list">
            {props.projects.map(project => {
                return <p>{project.projectname}</p>
            })}
        </div>
    )
}