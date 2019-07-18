import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, token, ...rest }) => {
    // console.log(token)
    return (
        <Route
            {...rest}
            render={props => token ? <Component {...props} /> : <Redirect to="/login" />}
        />
    )
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
}

export default connect(
    mapStateToProps,
    {}
)(PrivateRoute)