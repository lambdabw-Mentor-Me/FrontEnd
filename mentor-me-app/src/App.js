import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// import RegisterForm from './components/routes/EntRegisterForm';
// import LoginForm from './components/routes/EntLoginForm';
// import Profile from './pages/Profile';
import Questions from './pages/Questions';
// import Home from './pages/Home';
// import Search from './pages/Search';
import EntRoute from './components/routes/EntRoute';
import EntRegisterForm from './components/routes/EntRegisterForm';
import EntLoginForm from './components/routes/EntLoginForm';
import MentorRoute from './components/routes/MentorRoute';
import MentorRegisterForm from './components/routes/MentorRegisterForm';
import MentorLoginForm from './components/routes/MentorLoginForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-links">
            {/* <NavLink to="/">Home</NavLink> */}
            <NavLink to="/ent-register">Entrepreneur</NavLink>
            <NavLink to="/mentor-register">Mentor</NavLink>
            {/* <NavLink to="/login">Login</NavLink> */}
            {/* <NavLink to="/profile">Profile</NavLink> */}
            <NavLink to="/questions">Questions</NavLink>
            {/* <NavLink to="/search">Search</NavLink>  */}
          </div>
        </nav>
        <h1>Mentor Me App</h1>
      </div>

      <Switch>
        {/* <PrivateRoute exact path='/home' component={Home} /> */}
        <Route path='/ent-register' component={EntRegisterForm} />
         <EntRoute  exact path='/ent-login' component={EntLoginForm} />
         <Route path='/mentor-register' component={MentorRegisterForm} />
         <MentorRoute path='/mentor-login' component={MentorLoginForm} />
         {/* <MentorRoute path='/mentor-login' component={MentorLoginForm} /> */}
        {/* <PrivateRoute path='/profile' component={Profile} /> */}
        <EntRoute path='/questions' component={Questions} />
        {/* <PrivateRoute path='/search' component={Search} /> */}
      </Switch>
    </Router>
  );
}

export default App;
