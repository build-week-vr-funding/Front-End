import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state

        axios
            .post('https://vrfp.herokuapp.com/auth/login', { username, password })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { username, password } = this.state
        
        return (
            <div className="log-in-containr">
                <h1 className="log-in-header">Log In</h1>
                <div className="form-container">
                    <form className="log-in-form" onSubmit={this.handleSubmit}>
                        
                        <input 
                            name="username" 
                            placeholder="Username" 
                            value={username} 
                            onChange={this.changeHandler} 
                        /><br />
                        <input 
                            name="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={this.changeHandler} 
                        /><br />
                        <button type="submit">Login</button>
                    </form>
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        )
    }
}

export default Login;