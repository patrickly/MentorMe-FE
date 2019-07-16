import React from 'react';
import { Link } from 'react-router-dom'
import MenuNav from '../MenuNav/MenuNav'
import TonyBG from '../../images/tony-bg.jpg'
import ProfileBar from './ProfileBar'

const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <MenuNav />
            <div className='background-img'>
                <img src={TonyBG} alt='tony background' />
                <div className='about-txt'>
                    <p>Billionaire, Philanthropist, Superhero, Savior of the Universe</p>
                </div>
                <div className='mentorship'>
                    <Link to='/'>
                        <h3>'Mentor Me/Be My Menti' bar</h3>
                    </Link>
                </div>
            </div>
            <ProfileBar />
        </div>
    )
}

export default Profile