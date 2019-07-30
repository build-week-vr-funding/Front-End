import React, { Component } from 'react';
import './App.css';

import axiosWithAuth from './axiosWithAuth';
import LoginForm from './components/LogInForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axiosWithAuth().get('https://vrfp.herokuapp.com/users/').then(data => {console.log(data)});
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}
