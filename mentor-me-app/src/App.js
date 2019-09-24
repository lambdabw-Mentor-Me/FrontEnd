import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// import RegisterForm from './components/routes/EntRegisterForm';
// import LoginForm from './components/routes/EntLoginForm';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Home from './pages/Home';
import Search from './pages/Search';
import PrivateRoute from './routes/PrivateRoute';
import EntRegisterForm from './components/EntRegisterForm';
import EntLoginForm from './components/EntLoginForm';
import MentorLoginForm from './components/MentorLoginForm';
import MentorRegisterForm from './components/MentorRegisterForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-links">
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/Ent-register">Entrepreneur</NavLink> */}
            {/* <NavLink to="/Mentor-register">Mentor</NavLink> */}
            {/* <NavLink to="/ent-login">Login</NavLink> */}
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/questions">Questions</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/feed">Feed</NavLink>
          </div>
        </nav>
        <button><NavLink to='/ent-register'>Entrprenuer</NavLink></button>
        <button><NavLink to='/mentor-register'>Mentor</NavLink></button>
      </div>

      <Switch>
        {/* <PrivateRoute exact path='/home' component={Home} /> */}
        <Route exact path='/ent-register' component={EntRegisterForm} />
        <Route  exact path='/ent-login' component={EntLoginForm} />
        <Route exact path='/mentor-register' component={MentorRegisterForm} />
        <Route  exact path='/mentor-login' component={MentorLoginForm} />
         {/* <PrivateRoute path='/mentor-register' component={RegisterForm} /> */}
         {/* <MentorRoute path='/mentor-login' component={LoginForm} /> */}
         {/* <MentorRoute path='/mentor-login' component={MentorLoginForm} /> */}
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/questions' component={Questions} />
        <PrivateRoute path='/search' component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
