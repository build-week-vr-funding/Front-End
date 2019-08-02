import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h4 className="project-card-header">{props.project.projectName}</h4>
            <img className="project-card-img" alt="vr-aspects" src="\src\images\virtual-reality-aspects.jpg" />
            <h6 className="project-card-category">Type</h6>
            <p className="project-card-type">{`${props.project.projectType}`}</p>
            <h6 className="project-card-category">Funding</h6>
            <p className="project-card-funding">{`${props.project.fundingAmount}`}</p>
            <h6 className="project-card-category">Description</h6>
            <p className="project-card-description">{`${props.project.description}`}</p>
        </div>
    )
}