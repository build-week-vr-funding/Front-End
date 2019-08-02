import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashboardComponents/Dashboard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      loggedIn: localStorage.token ? true : false,
      loading: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log('token', token);
  }

  updateUserId = (id) => {
    this.setState({ userId: id })
  }

  handleLogin = () => {
    this.setState({ loggedIn: true })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false
    })
  }

  render() {
    const { loggedIn, userId } = this.state
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          loggedIn ? (
            <Redirect to="/dashboard"/>
          ) : (
            <Navigation />
          )
        )}/>
        <Route path="/register" component={Register} />
        <Route path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} updateUserId={this.updateUserId} loggedIn={loggedIn} />} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} userId={userId} handleLogout={this.handleLogout} loggedIn={loggedIn} />} />
      </div>
    )
  }
}

export default App;
