import React from 'react'
import { Button } from 'reactstrap'

class Login extends React.Component {
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
                </form>

                <div className='login-btn'>
                <Button>Sign-in</Button>
            </div>
              
    
            </div>
        )
    }
  }

  export default Login;