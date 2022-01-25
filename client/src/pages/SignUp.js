import React from 'react';
// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


function SignUp() {
    // const SignUp = () => {
    //     const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    //     const [addUser, { error }] = useMutation(ADD_USER);
    //     // update state based on form input changes
    //     const handleChange = (event) => {
    //         const { name, value } = event.target;

    //         setFormState({
    //             ...formState,
    //             [name]: value,
    //         });
    //     };

    //     // submit form
    //     // submit form (notice the async!)
    //     const handleFormSubmit = async event => {
    //         event.preventDefault();

    //         // use try/catch instead of promises to handle errors
    //         try {
    //             const { data } = await addUser({
    //                 variables: { ...formState }
    //             });

    //             Auth.login(data.addUser.token);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };



    return (
        <div className='d-flex justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <div className="card text-center card-shadow">
                    <div className="card-header">
                        <h2>Sign-Up</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Sign up below to join the community and get started sharing your story</h5>
                        {/* <form onSubmit={handleFormSubmit}> */}
                        < input
                            className='form-control m-1'
                            placeholder='Your username'
                            name='username'
                            type='username'
                            id='username'
                        // value={formState.username}
                        // onChange={handleChange}
                        />
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

                        <button className='btn btn-primary d-block w-100 m-1' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;