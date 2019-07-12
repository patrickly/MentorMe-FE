import React from 'react';
import './css/index.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/login';
import Signup from './components/signup/signup';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
     <Route
      path='/'
          exact
          component={LandingPage}
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
  );
}

export default App;
