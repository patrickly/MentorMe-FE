import React from 'react'
import { Button } from 'reactstrap'
import { Form, Input } from 'reactstrap'
// import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleLoginSubmit = () => {
		const user = this.state.username
		localStorage.setItem('user', user)
		window.location.reload()
	}
    render() {
        if (this.state.user) { console.log('true') } else { console.log('false') }
        return (
            <div className='landing-wrapper'>
                {/* <Link to='/'> */}
                    <h1 className='heading'>MentorMe</h1>
                {/* </Link> */}

                <div className='headline'>
                    <h4>Please log-in here!</h4>
                </div>

                <Form>
                    <Input
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <Input
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
					/>
                    <Button className='red-btn' onClick={this.handleLoginSubmit}>
                        Log in
                    </Button>
                </Form>

            </div>
        )
    }
  }

  export default Login;