import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Navigation from './components/Navigation';
import Dashboard from './components/DashboardComponents/Dashboard'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('https://vrfp.herokuapp.com/')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  createUser = (user) => {
    axios
    .post('https://vrfp.herokuapp.com/auth/register', user)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err.response)})
    // console.log(this.state.users)
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Register createUser={this.createUser} />
        <LogIn />
        <Dashboard />
      </div>
    );
  }
}
