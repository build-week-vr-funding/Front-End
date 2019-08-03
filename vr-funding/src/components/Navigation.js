import React from 'react';
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <div className="nav-container">
            <h1 className="nav-header"> Virtual Reality <br />Funding App </h1>
            <div className="nav-btn-container">
                <Link to="/register">
                    <button className="register-btn nav-btn" >Register New User</button>
                </Link><br />
                <Link to="/login">
                    <button className="login-btn nav-btn" >Log In</button>
                </Link>
            </div>
            <a href="https://www.vrfunder.netlify.com" className="nav-web-link">Go back to website</a>
        </div>
    )

}
