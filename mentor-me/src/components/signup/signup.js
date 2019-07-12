import React from 'react'
import { Button } from 'reactstrap'

class Signup extends React.Component {
    render() {
        return (
            <div className='landing-wrapper'>
    
                <h1>Welcome Back!</h1>
               
    
                <div className='headline'>
                    <h4>Please log-in here!</h4>
                </div>
    
    
    
              
                <form>
                    <input></input><br></br><br></br>
                    <input></input> 
                    <input></input> 
                    <input></input> 
                </form>

                <div className='login-btn'>
                <Button>Register</Button>
            </div>
              
    
            </div>
        )
    }
  }

  export default Signup;