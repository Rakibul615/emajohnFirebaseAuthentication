import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Create account</h1>
               
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="Enter your email" /> 
                <br />
                <input type="password" name="" id="" placeholder="Enter password" />
                <br />
                <input type="password" name="" id="" placeholder="re-enter password" />
                <br />
                <input type="submit" value="Submit" />
                </form>

                <p>Already have an account?<Link to="/login">SignIn</Link></p>

            </div>
            
        </div>
    );
};

export default Register;