import React from 'react'
import Login from '../login/Login'
import { AiFillHeart } from 'react-icons/ai'

const SignupSuccessful = () => {
    return (
        <div className='signup-success'>
            <div className='signup-success-content'>
                <p className='h-icon'><AiFillHeart /></p>
                <h3>Thank you!</h3>
                <p>Thanks for signing up. Welcome to <span><i>ShopLane</i></span>. We are happy to have you on board. Please login your account.</p>
            </div>
            <Login />
        </div>
    )
}

export default SignupSuccessful