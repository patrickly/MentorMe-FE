import React from 'react';
import './css/index.css';

import { Route } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
// import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

class App extends React.Component {
	render() {
		return (
			<div className="App">
        <Route
          path='/'
          exact
          component={LandingPage}
          // component={ConditionalView}
        />
        {/* <Route
          path='/landing'
          component={LandingPage}
        /> */}
        {/* <Route
          path='/profile'
          component={Profile}
        /> */}
        <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        />
        <Route
          path='/signup'
          component={Signup}
        />
        <PrivateRoute
          path="/protected"
          exact
          component={Profile}
        />
			</div>
		);
	}
}

// const ConditionalView = Authenticate(Profile)(LandingPage)

export default App