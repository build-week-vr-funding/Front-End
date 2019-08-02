import React from 'react';
import axios from 'axios';

import ProjectList from './ProjectList';
import CreateProject from './CreateProject';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        const id = this.props.userId
        axios.get(`https://vrfp.herokuapp.com/projects/${id}`)
        .then(res => {
            this.setState({ projects: [res.data] })
            console.log(this.state.projects)
        })
        .catch(err => {
            console.log(err)
        })
    }

    logout = () => {
        this.props.handleLogout()
        this.props.history.push("/login")
    }
    
    render() {
        console.log(this.props.loggedIn, 'user id', this.props.userId)
        return(
            <div className="dashboard-container">
                <h1> Dashboard </h1>
                <h2>Projects:</h2>
                <ProjectList projects={this.state.projects} />
                <CreateProject userId={this.props.userId} />
                <button type="submit" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}