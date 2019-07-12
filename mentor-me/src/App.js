import React from 'react';
import './css/index.css';

import { Route } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'

function App() {
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
    </div>
  );
}

export default App;
