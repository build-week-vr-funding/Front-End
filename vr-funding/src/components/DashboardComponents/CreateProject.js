import React from 'react';
import axios from 'axios';

export default class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
            projectType: '',
            description: '',
            fundingAmount: 0.0,
            user_id: 0
        }
    }

    componentDidMount() {
        this.setState({ user_id: this.props.userId })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        const { projectName, projectType, fundingAmount, description, user_id } = this.state
        const token = localStorage.getItem('token')
        const requestOptions = {
            headers: {
              Authorization: token
            }
          }
        const newProject = { projectName, projectType, fundingAmount, description, user_id }
        axios
            .post('https://vrfp.herokuapp.com/projects', requestOptions, newProject)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({
            projectName: '',
            projectType: '',
            description: '',
            fundingAmount: 0
        })
    }

    changeHandler = e => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        const { projectName, projectType, fundingAmount, description } = this.state
        return (
            <div className="create-project-container">
                <h3>Create new project</h3>
                <form onSubmit={this.submitHandler}>
                    <input name="projectName" placeholder="Project Name" value={projectName} onChange={this.changeHandler} />
                    <input name="projectType" placeholder="Project Type" value={projectType} onChange={this.changeHandler} />
                    <input type="number" name="fundingAmount" placeholder="Funding Amount" value={fundingAmount} onChange={this.changeHandler} />
                    <input name="description" placeholder="Description" value={description} onChange={this.changeHandler} />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}