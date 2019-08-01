import React from 'react';
// import axios from 'axios';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            id: 0
        }
    }
    render() {
        return(
            <div className="dashboard-container">
                <h1> Dashboard </h1>
                
            </div>
        )
    }
}