import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/register">Register</NavLink>
            <NavLink exact to="/login">Login</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/questions">Questions</NavLink>
          </div>
        </nav>
        <h1>Mentor Me App</h1>
      </div>

      <Route exact path='/' component={Home} />
      <Route path='/register' component={RegisterForm} />
      <Route path='/login' component={LoginForm} />
      <Route path='/profile' component={Profile} />
      <Route path='/questions' component={Questions} />
    </Router>
  );
}

export default App;
