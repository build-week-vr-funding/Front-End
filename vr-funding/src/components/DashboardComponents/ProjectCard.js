import React from 'react';
import vrAspects from './images/virtual-reality-aspects.jpg';

export default function ProjectCard(props) {
    return (
        <div className='project-card-container'>
            <h4 className="project-card-header">{props.project.projectName}</h4>
            <img className="project-card-img" alt="vr-aspects" src={vrAspects} />
            <div className="project-card-about">
                <h6 className="project-card-category">Type</h6>
                <p className="project-card-type">{`${props.project.projectType}`}</p>
                <h6 className="project-card-category">Funding</h6>
                <p className="project-card-funding">{`$${props.project.fundingAmount}`}</p>
                <h6 className="project-card-category">Description</h6>
                <p className="project-card-description">{`${props.project.description}`}</p>
            </div>
        </div>
    )
}