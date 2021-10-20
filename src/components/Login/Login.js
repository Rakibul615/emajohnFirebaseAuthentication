import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle}=useFirebase();
    return (
        <div className="login-form">
           <div>
               <h1>Login</h1>
               <form onSubmit="">
                <input type="email" name="" id="" placeholder="Enter your email" /> 
                <br />
                <input type="password" name="" id="" placeholder="Enter password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to ema john?<Link to="/register">Create Account</Link></p>
          
            <div>-----------or----------</div>
            
            <button className="btn-regular" onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;