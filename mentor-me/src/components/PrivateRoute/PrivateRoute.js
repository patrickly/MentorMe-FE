import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, token, isLoggedIn, ...rest }) => {
    console.log(isLoggedIn)
    return (
        <Route
            {...rest}
            render={props => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />}
        />
    )
}

const mapStateToProps = state => {
    return {
    //   token: state.token,
      isLoggedIn: state.isLoggedIn,
    }
}

export default connect(
    mapStateToProps,
    {}
)(PrivateRoute)