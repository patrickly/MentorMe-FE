import React from 'react';
import './css/index.css';

import { Route } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
import Conversations from './components/Converstations/Conversations'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Signup from './components/SignUp/SignUp'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'

// import { getUsers } from './actions'
// import { connect } from 'react-redux'

class App extends React.Component {
  // componentDidMount() {
  //   this.props.getUsers()
  // }
	render() {
		return (
			<div className="App">
        <PublicRoute
          path='/'
          exact
					component={LandingPage}
        />
        <PublicRoute
          path='/login'
          component={Login}
        />
				<PublicRoute
					path='/signup'
					component={Signup}
				/>
				<PrivateRoute
					path="/logout"
					component={Logout}
				/>
        <PrivateRoute
          path="/protected"
          component={Profile}
        />
        <PrivateRoute
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
