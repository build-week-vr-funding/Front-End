import React from 'react';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            about: ''
        }
    }

    submitHandler = evt => {
        evt.preventDefault();
        console.log(this.state)
        this.props.createUser(this.state)
        this.setState({
            username: '',
            password: '',
            name: '',
            about: ''
        })
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
                        <input name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /><br />
                        <input name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /><br />
                        <input name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} /><br />
                        <input name="about" placeholder="About" value={this.state.about} onChange={this.changeHandler} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}