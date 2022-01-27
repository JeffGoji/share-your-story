import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';





function Login() {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);



    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    // Updated with Apollo/GRaphql syntax
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Updated with Apollo/GRaphql syntax
        try {
            const { data } = await login({ variables: { ...formState } });

            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }

        // clear form values
        setFormState({
            username: '',
            password: '',
        });




    };

    return (

        <div className='d-flex justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <div className="card card-shadow text-center">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <form noValidate validated={'validated'} onSubmit={handleFormSubmit}>
                        <div className="card-body">
                            <h5 className="card-title">Login below to visit your dashboard</h5>
                            <label className='mt-3'>Your username</label>
                            <input
                                className='form-control m-1'
                                placeholder='Your Username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleInputChange}
                            />
                            <label className='mt-3'>Your Password</label>
                            <input
                                className='form-control m-1'
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleInputChange}
                            />

                            <button
                                className='btn btn-primary d-block w-100 m-1' type='submit' onClick={handleInputChange}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    )
}


export default Login;