import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { registerUser } from '../actions';

class Register extends React.Component {
    constructor() {
        super();
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
        console.log(username, password, name, about);
        this.props.registerUser( username, password, name, about )
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
        const { isLoading, errorMessage } = this.props
        return (
            <div className="register-containr">
                <h1 className="register-header">Create new user</h1>
                <div className="form-container">
                    <form className="register-form" onSubmit={this.submitHandler}>
                        {errorMessage && <p className="error">{errorMessage}</p>}

                        <input name="username" placeholder="Username" value={username} onChange={this.changeHandler} /><br />
                        <input name="password" placeholder="Password" value={password} onChange={this.changeHandler} /><br />
                        <input name="name" placeholder="Name" value={name} onChange={this.changeHandler} /><br />
                        <input name="about" placeholder="About" value={about} onChange={this.changeHandler} /><br />
                        {isLoading
                            ? <p>Logging in...</p>
                            : <button type="submit">Register</button>}
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
	registerUser
}

export default withRouter(
    connect( 
        mapStateToProps, 
        mapDispatchToProps 
        )(Register)
) 