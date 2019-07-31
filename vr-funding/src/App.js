import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import { getUsers } from './actions'

// import PrivateRoute from './components/PrivateRoute';
// import Dashboard from './components/DashboardComponents/Dashboard';
import LoginForm from './components/LogInForm';
import Register from './components/Register';

class App extends Component {
  // componentDidMount() {
	// 	this.props.getUsers()
	// }

  render() {
    return (
      <div className="App">
        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        <Route exact path="/" component={LoginForm} />
        <Register />
      </div>
    )
  }
}

const mapDispatchToProps = {
	getUsers,
}

export default withRouter(
	connect(null, mapDispatchToProps)(App)
)
