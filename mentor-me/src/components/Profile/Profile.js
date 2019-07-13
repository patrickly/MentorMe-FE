import React from 'react';
import { Link } from 'react-router-dom'
import MenuNav from '../MenuNav/MenuNav'
import TonyBG from '../../images/tony-bg.jpg'
// import TonyProfile from '../../images/tony-profile.jpg'

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
            <div className='profile-nav'>
                <p>Small Profile pic</p>
                <p>About</p>
                <p>Mentors/Menties</p>
                <p>Reviews</p>
                <p>Posts</p>

                <p>Small Profile pic</p>
                <p>About</p>
                <p>Mentors/Menties</p>
                <p>Reviews</p>
                <p>Posts</p>
            </div>
            <div>Nav component info goes here...</div>
        </div>
    )
}

export default Profile