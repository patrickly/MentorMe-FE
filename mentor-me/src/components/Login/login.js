import React from 'react'
import { Button } from 'reactstrap'
import { Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className='landing-wrapper'>
                <Link to='/'>
                    <h1 className='heading'>MentorMe</h1>
                </Link>

                <div className='headline'>
                    <h4>Please log-in here!</h4>
                </div>

                <Form>
                    <Input
                        type='text'
                        placeholder='Username'
                        >
                    </Input>
                    <Input
                        type='password'
                        placeholder='Password'>
                    </Input>
                </Form>
                <div>
                    <Button className='red-btn'>Sign-in</Button>
                </div>
            </div>
        )
    }
  }

  export default Login;