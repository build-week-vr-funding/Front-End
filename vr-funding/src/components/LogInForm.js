import React from 'react';
import setToken from '../token'

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    changeHandler = evt => {
        this.setState({ [evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <div className="register-containr">
                <h1 className="register-header">Log In</h1>
                <div className="form-container">
                    <form className="register-form" onSubmit={this.submitHandler}>
                        <input name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /><br />
                        <input name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /><br />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}