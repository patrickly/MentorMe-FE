import React from 'react';
import './css/index.css';

import { Route } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
import Conversations from './components/Converstations/Conversations'
//import Login from './components/Login/Login'
//import Signup from './components/SignUp/Signup'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

// import { getUsers } from './actions'
// import { connect } from 'react-redux'

class App extends React.Component {
  // componentDidMount() {
  //   this.props.getUsers()
  // }
	render() {
		return (
			<div className="App">
        <Route
          path='/'
          exact
          component={LandingPage}
        />
        {/* <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        /> */}
        {/* <Route
          path='/signup'
          render={props => (
            <Signup {...props} />
          )}
        /> */}
        <PrivateRoute
          path="/protected"
          component={Profile}
        />
        <Route
          path='/convo'
          component={Conversations}
        />
			</div>
		);
	}
}

export default App
// export default connect(
//   null,
//   { getUsers }
// )(App)