import React from 'react'
import { register } from '../../actions'
import { connect } from 'react-redux'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Form, Input } from 'reactstrap'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                username: '',
                password: '',
                age: '',
                location: '',
                phone_number: '',
                business_type: '',
            }
        }
    }
    handleInputChange = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
    };

    handleRegister = e => {
        e.preventDefault()
        this.props
            .register(this.state.newUser)
            .then(() => this.props.addedUser ? this.props.history.push('/login') : alert('User was not successfully added'))
    }
    render() {
        return (
            <div className='landing-wrapper'>
                <Link to='/'>
                    <h1 className='heading'>MentorMe</h1>
                </Link>

                <div className='headline'>
                    <h4>Please sign up here!</h4>
                </div>

                <Form onSubmit={this.handleRegister}>
                    <Input
                        type='text'
                        name='username'
                        value={this.state.newUser.username}
                        placeholder='Username'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Input
                        type='password'
                        name='password'
                        value={this.state.newUser.password}
                        placeholder='Password'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Input
                        type='text'
                        name='age'
                        value={this.state.newUser.age}
                        placeholder='Age'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Input
                        type='text'
                        name='location'
                        value={this.state.newUser.location}
                        placeholder='Location'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Input
                        type='text'
                        name='phone_number'
                        value={this.state.newUser.phone_number}
                        placeholder='Phone number'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Input
                        type='text'
                        name='business_type'
                        value={this.state.newUser.business_type}
                        placeholder='Business type'
                        onChange={this.handleInputChange}>
                    </Input>
                    <Button className='green-btn'>Register</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps =state => {
    return {
        addedUser: state.addedUser,
    }
}

export default connect(
    mapStateToProps,
    { register }
)(Signup)
