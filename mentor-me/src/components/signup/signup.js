import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Form, Input } from 'reactstrap'

class Signup extends React.Component {
    render() {
        return (
            <div className='landing-wrapper'>
                <Link to='/'>
                    <h1>Welcome Back!</h1>
                </Link>

                <div className='headline'>
                    <h4>Please log-in here!</h4>
                </div>

                <Form>
                    <Input
                        type='text'
                        placeholder='Name'>
                    </Input>
                    <Input
                        type='text'
                        placeholder='Age'>
                    </Input>
                    <Input
                        type='text'
                        placeholder='Location'>
                    </Input>
                    <Input
                        type='text'
                        placeholder='Profession'>
                    </Input>
                </Form>

                <div>
                    <Button className='green-btn'>Register</Button>
                </div>
            </div>
        )
    }
  }

  export default Signup;