import React from 'react';
import './css/index.css';

import { Route } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'

export default function App() {
  return (
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
  )
}


