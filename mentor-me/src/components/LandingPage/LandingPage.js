import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing-wrapper'>
            <Link to='/profile'>
                <h1>MentorMe</h1>
            </Link>

            <div className='headline'>
                <h4>Connecting mentors and menties locally and globally . . .</h4>
            </div>

            <div className='signup'>
                <Link to="/signup">
                    <Button className='red-btn'>Sign up now!</Button>
                </Link>
            </div>

            <div className='login-prompt'>
                <p>Already a member?</p>
            </div>

            <div className='login'>
                <Link to="/login">
                    <Button className='green-btn'>Login here!</Button>
                </Link>
            </div>

            

        </div>
    )
}

export default LandingPage