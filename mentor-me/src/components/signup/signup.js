import React from 'react'
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

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
                <Link to="/signup"><Button>Register!</Button></Link> 
            </div>
              
    
            </div>
        )
    }
  }

  export default Signup;