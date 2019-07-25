import React from 'react';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state ={
            username: '',
            password: '',
            name: '',
            about: ''
        }
    }

    submitHandler = evt => {
        evt.preventDefault();
    }

    changeHandler = evt => {
        this.setState({ [evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <div className="register-containr">
                <h1 className="register-header">Create new user</h1>
                <div className="form-container">
                    <form className="register-form" onSubmit={this.submitHandler}>
                        <input name="username" placeHolder="Username" value={this.state.username} onChange={this.changeHandler} /><br />
                        <input name="password" placeHolder="Password" value={this.state.password} onChange={this.changeHandler} /><br />
                        <input name="name" placeHolder="Name" value={this.state.name} onChange={this.changeHandler} /><br />
                        <input name="about" placeHolder="About" value={this.state.about} onChange={this.changeHandler} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}