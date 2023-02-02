import React, { useState } from 'react'
import './login.css';
import { Field, Form, Formik } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const schema = Yup.object({
        email: Yup.string("Invalid Type")
            .required("Email is mandatory")
            .email("Email should be in correct format"),
        password: Yup.string("Invalid Type")
            .required("Password is mandatory")
            .min(6, "Password should be min 6 characters")
            .max(10, "Password cannot exceed more than 10 characters")
            .matches(/^(?=.*[0-9])/, "Password must contain atleast a number")
            .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
            .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")

    })

    let navigate = useNavigate();


    const [value, setValues] = useState({
        email: '',
        password: ''
    })

    function submitHandle() {
        navigate('/', true)
    }

    return (
        <div className='login-container'>
            <Formik initialValues={value} onSubmit={submitHandle} validationSchema={schema}>
                {(props) => (
                    <Form className='login-form'>
                        <div className='login-icon'>
                            <FaUserCircle />
                        </div>
                        <div className='login-form-cred'>
                            <label htmlFor='email'>Email:</label>
                            <Field type="email" name="email" className="field" />
                            <span className="error-msg">{props.errors.email}</span>
                        </div>
                        <div className='login-form-cred'>
                            <label htmlFor='password'>Password:</label>
                            <Field type="password" name="password" className="field" />
                            <span className="error-msg">{props.errors.password}</span>
                        </div>
                        <div>
                            <button type='submit' className='btn'>Login</button>
                        </div>
                        <div>
                            <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink> </p>
                        </div>

                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Login