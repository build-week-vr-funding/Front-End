import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashboardComponents/Dashboard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.token ? true : false,
      loading: false
    }
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Navigation} />
        <Route path="/register" component={Register} />
        <Route path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} handleLogout={this.handleLogout} loggedIn={this.state.loggedIn} />} />
      </div>
    )
  }
}

export default App;
