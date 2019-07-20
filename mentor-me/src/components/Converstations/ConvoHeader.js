import React from 'react'
import TonyProfile from '../../images/tony-profile.jpg'

export default function ConvoHeader() {
    return (
        <div className='convo-header-wrapper'>
            <img src={TonyProfile} alt='Tony' />
            <h3>Tony Stark</h3>
        </div>
    )
}