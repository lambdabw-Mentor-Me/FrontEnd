import React, { useContext, useState, useEffect } from 'react';
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
import Feed from './components/Feed';

import { QuestionsContext } from './contexts/QuestionsContext';

import './App.css';

function App() {
  const [questions, setQuestions] = useState([{}])

  return (
    <>
    <Router>
      <div className="App">
        <nav>
          <div className="nav-links">
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
        <Route exact path='/ent-register' component={EntRegisterForm} />
        <Route  exact path='/ent-login' component={EntLoginForm} />
        <Route exact path='/mentor-register' component={MentorRegisterForm} />
        <Route  exact path='/mentor-login' component={MentorLoginForm} />
      
          <PrivateRoute path='/profile' component={Profile} />
          <QuestionsContext.Provider value={[{ questions, setQuestions }]}> 
            <PrivateRoute path='/questions' component={Questions} />
            <PrivateRoute path='/search' component={Search} />
            <PrivateRoute path='/feed' component={Feed} />
          </QuestionsContext.Provider>
      </Switch>
    </Router>

  </>
  );
}

export default App;
