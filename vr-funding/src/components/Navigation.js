import React from 'react';
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <div className="nav-container">
            <h1> VR Funding App </h1>
            <div className="nav-btn-container">
                <Link to="/register">
                    <button>Register New User</button>
                </Link><br />
                <Link to="/login">
                    <button>Log In</button>
                </Link>
            </div>
        </div>
    )
}
