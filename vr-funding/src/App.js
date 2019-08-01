import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashboardComponents/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Navigation} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

export default App;
