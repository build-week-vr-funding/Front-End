import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LogInForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}
