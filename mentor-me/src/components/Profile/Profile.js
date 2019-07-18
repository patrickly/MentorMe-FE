import React from 'react';
import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'
import MenuNav from '../MenuNav/MenuNav'
import TonyBG from '../../images/tony-bg.jpg'
import ProfileBar from './ProfileBar'
// import { connect } from 'react-redux'

export default class Profile extends React.Component {
    state = {
        isLoggedIn: false,
    }
    toggle = this.toggle.bind(this)
    toggle() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
        const user = this.state.username
		localStorage.setItem('user', user)
        window.location.reload()
    }
    render() {
        return (
            <div className='profile-wrapper'>
                <MenuNav />
                <div className='background-img'>
                    <img src={TonyBG} alt='tony background' />
                    <div className='about-txt'>
                        <p>Billionaire, Philanthropist, Superhero, Savior of the Universe</p>
                    </div>
                    <div className='mentorship'>
                        <Link to='/' onClick={this.toggle}>
                            <h3>'Mentor Me/Be My Mentie bar</h3>
                        </Link>
                    </div>
                </div>
                <ProfileBar />
            </div>
        )
    }
}