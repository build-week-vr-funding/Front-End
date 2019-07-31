import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from '../actions';

class LoginForm extends React.Component {
    constructor() {
        super();
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
        this.props.login(username, password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const { username, password } = this.state
        const { isLoading, errorMessage } = this.props
        
        return (
            <div className="log-in-containr">
                <h1 className="log-in-header">Log In</h1>
                <div className="form-container">
                    <form className="log-in-form" onSubmit={this.handleSubmit}>
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        
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

                        {isLoading
                            ? <p>Logging in...</p>
                            : <button type="submit">Login</button>}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
	login,
}

export default withRouter(
    connect( 
        mapStateToProps, 
        mapDispatchToProps 
        )(LoginForm)
) 