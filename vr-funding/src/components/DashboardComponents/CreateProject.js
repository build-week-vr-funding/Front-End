import React from 'react';
import axios from 'axios';

export default class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
            projectType: '',
            description: '',
            fundingAmount: '',
            user_id: 0
        }
    }

    componentDidMount() {
        this.setState({ user_id: localStorage.getItem('user_id') })
    }

    submitHandler = e => {
        e.preventDefault();
        const { projectName, projectType, description } = this.state
        const user_id = Number(this.state.user_id)
        const fundingAmount = Number(this.state.fundingAmount)
        const token = localStorage.getItem('token')
        const requestOptions = {
            headers: {
              Authorization: token
            }
          }
        const newProject = { projectName, projectType, fundingAmount, description, user_id }
        console.log('New Project', newProject)
        axios
            .post('https://vrfp.herokuapp.com/projects',newProject, requestOptions)
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
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        const { projectName, projectType, fundingAmount, description } = this.state
        return (
            <div className="create-project-container">
                <h3 className="create-project-header">Create new project</h3>
                <form className="create-project-form" onSubmit={this.submitHandler}>
                    <input className="create-project-input" name="projectName" placeholder="Project Name" value={projectName} onChange={this.changeHandler} /><br />
                    <input className="create-project-input" name="projectType" placeholder="Project Type" value={projectType} onChange={this.changeHandler} /><br />
                    <input className="create-project-input" name="fundingAmount" placeholder="Funding Amount" value={fundingAmount} onChange={this.changeHandler} /><br />
                    <input className="create-project-input" name="description" placeholder="Description" value={description} onChange={this.changeHandler} /><br />
                    <button className="create-project-submit-btn"type="submit">+</button><br />
                </form>
            </div>
        )
    }
}