import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h4>{props.project.projectName}</h4>
            <p>{`Type: ${props.project.projectType}`}</p>
            <p>{`Funding: ${props.project.fundingAmount}`}</p>
            <p>{`Description: ${props.project.description}`}</p>
        </div>
    )
}