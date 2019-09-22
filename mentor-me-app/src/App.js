import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Home from './pages/Home';
import Search from './pages/search';

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
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/profile' render={props => (<Profile {...props} />)} />
        <Route path='/questions' render={props => (<Questions {...props} />)} />
        <Route path='/search' render={props => (<Search {...props} />)} />
      </Switch>
    </Router>
  );
}

export default App;
