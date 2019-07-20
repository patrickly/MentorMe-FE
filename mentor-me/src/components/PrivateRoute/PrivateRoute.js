import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
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
      isLoggedIn: state.isLoggedIn,
    }
}

export default connect(
    mapStateToProps,
    {}
)(PrivateRoute)