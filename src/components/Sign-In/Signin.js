import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signin.css'

const Signin = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirects_uri = location.state?.from || '/shop';

    const handleGoogleSign = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirects_uri)
            })
    }


    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Sign Up</Link></p>
                <div>-------or----------</div>
                <button
                    onClick={handleGoogleSign}
                    className="btn-regular"
                >Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Signin;