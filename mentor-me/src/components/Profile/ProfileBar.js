import React from 'react'
import TonyProfile from '../../images/tony-profile.jpg'

export default function ProfileBar() {
    return (
        <div className='profile-bar-wrapper'>
            <img src={TonyProfile} alt='tony profile' />
            <div className='bar-info-wrapper'>
                <div className='about'>
                    <div className='about-text'>
                        About
                    </div>
                </div>
                <div className='mentors'>
                    <div className='number'>0</div>
                    <div>Mentors</div>
                </div>
                <div className='menties'>
                    <div className='number'>42</div>
                    <div>Menties</div>
                </div>
                <div className='Posts'>
                    <div className='number'>> 9,000</div>
                    <div>Posts</div>
                </div>
            </div>
        </div>
    )
}