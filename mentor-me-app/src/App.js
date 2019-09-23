import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Home from './pages/Home';
import Search from './pages/Search';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/questions">Questions</NavLink>
            <NavLink to="/search">Search</NavLink>
          </div>
        </nav>
        <h1>Mentor Me App</h1>
      </div>

      <Switch>
        <PrivateRoute exact path='/home' component={Home} />
        <Route component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/profile' render={props => (<Profile {...props} />)} />
        <PrivateRoute path='/questions' render={props => (<Questions {...props} />)} />
        <PrivateRoute path='/search' render={props => (<Search {...props} />)} />
      </Switch>
    </Router>
  );
}

export default App;
