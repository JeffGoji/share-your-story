import React from 'react';
// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


function Login() {
    // const [formState, setFormState] = useState({ email: '', password: '' });
    // // const [login, { error }] = useMutation(LOGIN_USER);
    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await login({
    //             variables: { ...formState }
    //         });

    //         Auth.login(data.login.token);
    //     } catch (e) {
    //         console.error(e);
    //     }


    //     // clear form values
    //     setFormState({
    //         email: '',
    //         password: '',
    //     });
    // };

    return (

        <div className='d-flex justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <div className="card card-shadow text-center">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Login below to visit your dashboard</h5>
                        {/* <form onSubmit={handleFormSubmit}> */}
                        <input
                            className='form-control m-1'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                        // value={formState.email}
                        // onChange={handleChange}
                        />
                        <input
                            className='form-control m-1'
                            placeholder='******'
                            name='password'
                            type='password'
                            id='password'
                        // value={formState.password}
                        // onChange={handleChange}
                        />
                        {/* </form> */}
                        <button className='btn btn-primary d-block w-100 m-1' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;