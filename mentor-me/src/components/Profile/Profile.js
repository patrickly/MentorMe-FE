import React from 'react';
import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'
import MenuNav from '../MenuNav/MenuNav'
import TonyBG from '../../images/tony-bg.jpg'
import ProfileBar from './ProfileBar'
import ProfileAbout from './ProfileAbout'
// import { connect } from 'react-redux'

export default class Profile extends React.Component {
    render() {
        return (
            <div className='profile-wrapper'>
                <MenuNav />
                <div className='background-img'>
                    <img src={TonyBG} alt='tony background' to='/home' />
                    <div className='about-txt'>
                        <p>Billionaire, Philanthropist, Superhero, Savior of the Universe</p>
                    </div>
                    <div className='mentorship'>
                        <Link to='/'>
                            <h3>'Mentor Me/Be My Mentie bar</h3>
                        </Link>
                    </div>
                </div>
                <ProfileBar />
                <ProfileAbout />
            </div>
        )
    }
}