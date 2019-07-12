import React from 'react';
import './css/index.css';
import Login from './components/Login/login';
import LandingPage from './components/LandingPage/LandingPage'
import Signup from './components/signup/signup'

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
