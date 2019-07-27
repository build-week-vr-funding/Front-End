import React from 'react';
import ProjectList from './ProjectList';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            projectName: '',
            projectType: '',
            description: '',
            fundingAmount: 0.0,
            user_id: 0
        }
    }
    render() {
        return(
            <div className="dashboard-container">
                <h1> Dashboard </h1>
                <ProjectList projects={this.state.projects} />
            </div>
        )
    }
}