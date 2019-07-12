import React from 'react'
import { Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../Login/login';

const LandingPage = () => {
    return (
        <Router>
        <div className='landing-wrapper'>

            <h1>MentorMe</h1>

            <div className='headline'>
                <h4>Connecting mentors and menties locally and globally . . .</h4>
            </div>

            <div className='signup-btn'>
                <Button>Sign up now!</Button>
            </div>

            <div className='login-prompt'>
                <p>Already a member?</p>
            </div>

            <div className='login-btn'>
            <Link to="/login"><Button>Login here!</Button></Link> 
            </div>

        </div>
        <Route path="/login" component={Login} />
        </Router>
    )
}

export default LandingPage