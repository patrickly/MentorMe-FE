import React from 'react';
import { Link } from 'react-router-dom'

export default class MenuNav extends React.Component {
    state = {
        isActive: false
    }
    toggle = this.toggle.bind(this)
    toggle() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return (
            <div className='nav-wrapper'>
                <nav>
                    <div className={`burger-links${this.state.isActive ? ' logo-center' : ''}`}
                        isActive={this.state.isActive}
                        onClick={this.toggle}>
                        <div className={`burger${this.state.isActive ? ' in-active' : ''}`}
                            isActive={this.state.isActive}
                            onClick={this.toggle}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='nav-logo'>
                            <Link to='/'>
                                <h3>MentorMe</h3>
                            </Link>
                        </div>
                    </div>
                    <div className={`burger2${this.state.isActive ? ' active' : ''}`}
                        isActive={this.state.isActive}
                        onClick={this.toggle}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`nav-links${this.state.isActive ? ' active' : ''}`}
                        isActive={this.state.isActive}
                        >
                        <Link to='/'><div>Home</div></Link>
                        <Link to='/'><div>Question Feed</div></Link>
                        <Link to='/'><div>Notifications</div></Link>
                        <Link to='/'><div>Messages</div></Link>
                    </div>
                </nav>
            </div>
        )
    }
}