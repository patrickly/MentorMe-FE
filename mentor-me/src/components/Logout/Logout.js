import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions'

class Logout extends React.Component {
  componentWillMount(props){
    console.log('here');
    this.props.logout();
  }
    render() {
        return <Redirect to="/"/>
    }
}

// const mapStateToProps = state => {
//     return {
//       isLoggingIn: state.isLoggingIn
//     }
// }

export default connect(
    // mapStateToProps,
    null,
    { logout }
)(Logout)