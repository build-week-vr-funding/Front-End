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

    logout = () => {
        this.props.handleLogout()
        this.props.history.push("/login")
    }

    render() {
        return(
            <div className="dashboard-container">
                <h1> Dashboard </h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}