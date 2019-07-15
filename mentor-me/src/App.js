import React from 'react';
import './css/index.css';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Signup from './components/signup/Signup'
import Home from './components/Home/Home'

function App() {
  return (
    <div>
    <div className="App">
      <Route
        path='/'
        exact
        component={LandingPage}
      />
      <Route
        path='/profile'
        component={Profile}
      />
      <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/signup'
        component={Signup}
      />
    </div>
      <div className ="App2">
      <Route
        path='/home'
        component={Home}
      />
      </div>

  </div>
  );
}

export default App;
