import React from 'react';
import axios from 'axios';

import ProjectList from './ProjectList';
import CreateProject from './CreateProject';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            projects: [],
        }
    }

    componentDidMount() {
        const id = localStorage.getItem('user_id')
        this.setState({ user_id: id })
        axios.get(`https://vrfp.herokuapp.com/projects/${id}`)
        .then(res => {
            this.setState({ projects: [res.data] })
            console.log(this.state.user_id)
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
                <h1 className="dashboard-header"> Dashboard </h1>
                <div className="dashboard-projects-list">
                <h2 className="projects-header">Projects:</h2>
                    <ProjectList projects={this.state.projects} />
                </div>
                <CreateProject userId={this.state.userId} />
                <button className="submit-btn" type="submit" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}