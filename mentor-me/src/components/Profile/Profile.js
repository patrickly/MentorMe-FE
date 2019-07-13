import React from 'react';
// import { Link } from 'react-router-dom'
import MenuNav from '../MenuNav/MenuNav'

const Profile = () => {
    return (
        <div>
            <div>
                <MenuNav />
            </div>
            <div>
                <p>Profile Image</p>
                <p>Profile info</p>
            </div>
            <div>
                <p>'Mentor Me/Be My Menti' bar</p>
            </div>
            <div className='profile-nav'>
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