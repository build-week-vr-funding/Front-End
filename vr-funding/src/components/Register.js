import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
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
        const { username, password, name, about } = this.state

        const newUser = { username, password, name, about }
        axios
            .post('https://vrfp.herokuapp.com/auth/register', newUser ) 
            .then(res => {
                console.log(res)
                this.props.history.push("/login")
            })
            .catch(err => {
                console.log(err)
            })
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
        const { username, password, name, about } = this.state
        return (
            <div className="register-containr">
                <h1 className="register-header">Create new user</h1>
                <div className="form-container">
                    <form className="register-form" onSubmit={this.submitHandler}>
                        <input name="username" placeholder="Username" value={username} onChange={this.changeHandler} /><br />
                        <input name="password" placeholder="Password" value={password} onChange={this.changeHandler} /><br />
                        <input name="name" placeholder="Name" value={name} onChange={this.changeHandler} /><br />
                        <input name="about" placeholder="About" value={about} onChange={this.changeHandler} /><br />
                        <button type="submit">Register</button>
                    </form>
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        )
    }
}

export default Register;