import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
            username: '',
            password: ''}
        }
    }


    changeHandler = e => {
        this.setState({
            credentails: {
                ...this.state.credentails,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
    }

    render() {
        return (
            <div className="log-in-containr">
                <h1 className="log-in-header">Log In</h1>
                <div className="form-container">
                    <form className="log-in-form" onSubmit={this.login}>
                        <input 
                            name="username" 
                            placeholder="Username" 
                            value={this.state.username} 
                            onChange={this.changeHandler} 
                        /><br />
                        <input 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.changeHandler} 
                        /><br />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    isLoggedIn: state.isLoggedIn
});

export default connect( mapStateToProps, { login } )(LoginForm)