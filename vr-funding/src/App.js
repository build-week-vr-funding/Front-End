import React, { Component } from 'react';
import './App.css';
import Register from './components/Register'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://vrfp.herokuapp.com/')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}
