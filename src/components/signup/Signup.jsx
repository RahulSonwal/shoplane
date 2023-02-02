import React, { useState } from 'react'
import './signup.css';
import { Field, Form, Formik } from 'formik';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const schema = Yup.object({
        fname: Yup.string("Invalid Type")
            .required("First name is mandatory")
            .min(3, "First name should be min 3 characters")
            .max(20, "First name cannot exceed more than 20 characters"),
        lname: Yup.string("Invalid Type")
            .required("Last name is mandatory")
            .min(3, "Last name should be min 3 characters")
            .max(20, "Last name cannot exceed more than 20 characters"),
        email: Yup.string("Invalid Type")
            .required("Email is mandatory")
            .email("Email should be in correct format"),
        password: Yup.string("Invalid Type")
            .required("Password is mandatory")
            .min(6, "Password should be min 6 characters")
            .max(10, "Password cannot exceed more than 10 characters")
            .matches(/^(?=.*[0-9])/, "Password must contain atleast a number")
            .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
            .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character"),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')

    })

    let navigate = useNavigate();


    const [value, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    function submitHandle() {
        navigate("/signup-success", true)
    }

    return (
        <div className='signup-container'>
            <Formik initialValues={value} onSubmit={submitHandle} validationSchema={schema}>
                {(props) => (
                    <Form className='signup-form'>
                        <div className='signup-icon'>
                            <FaUserPlus />
                        </div>
                        <div className='signup-form-cred'>
                            <label htmlFor='fname'>First Name:</label>
                            <Field type="fname" name="fname" className="signup-field" />
                            <span className="error-msg">{props.errors.fname}</span>
                        </div>
                        <div className='signup-form-cred'>
                            <label htmlFor='lname'>Last Name:</label>
                            <Field type="lname" name="lname" className="signup-field" />
                            <span className="error-msg">{props.errors.lname}</span>
                        </div>
                        <div className='signup-form-cred'>
                            <label htmlFor='email'>Email:</label>
                            <Field type="email" name="email" className="signup-field" />
                            <span className="error-msg">{props.errors.email}</span>
                        </div>
                        <div className='signup-form-cred'>
                            <label htmlFor='password'>Password:</label>
                            <Field type="password" name="password" className="signup-field" />
                            <span className="error-msg">{props.errors.password}</span>
                        </div>
                        <div className='signup-form-cred'>
                            <label htmlFor='passwordConfirmation'>Confirm Password:</label>
                            <Field type="password" name="passwordConfirmation" className="signup-field" />
                            <span className="error-msg">{props.errors.passwordConfirmation}</span>
                        </div>
                        <div>
                            <button type='submit' className='btn'>Sign Up</button>
                        </div>
                        <div>
                            <p>Already have an account? <NavLink to="/login">Login</NavLink> </p>
                        </div>

                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Signup