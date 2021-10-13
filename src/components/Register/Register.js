import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Your Account</h2>
                <form>
                    <input type="name" name="" id="" placeholder="Enter Your Name" />
                    <br /> <br />
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder='Enter Your Password' />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder='Re-Enter Your Password' />
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have An Account? <Link to="/login">Sign In</Link></p>
                <button
                    className="btn-regular"
                >Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;