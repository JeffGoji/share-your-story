// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


// function SignUp() {
const SignUp = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    // update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    };


    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Updated with Apollo/Graphql syntax
        try {
            const { data } = await addUser({ variables: { ...formState } });

            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }

        setFormState({
            username: " ",
            email: " ",
            password: "",
        });
    };


    return (
        <div className='d-flex justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <div className="card text-center card-shadow">
                    <div className="card-header">
                        <h2>Sign-Up</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Sign up below to join the community and get started sharing your story</h5>
                        <form noValidate={validated} onSubmit={handleFormSubmit}>

                            {/* <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your login credentials!
                            </alert> */}

                            <label className="form-label mt-5">Username</label>
                            < input
                                className='form-control m-1'
                                placeholder='Your username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleInputChange}
                            />

                            <label className="form-label">Your email</label>
                            <input
                                className='form-control m-1'
                                placeholder='Someone@email.com'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleInputChange}
                            />
                            <label className="form-label">Your Password</label>
                            <input
                                className='form-control m-1 mb-3'
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleInputChange}
                            />
                            {/* <label className="form-label">Your Region</label>
                    <select value={formState.region}
                        onChange={handleChange}
                        className='btn-primary'>
                        <option value="Gulf Coast Area">Gulf Coast Area</option>
                        <option value="Centeral Texas">Central Texas</option>
                        <option value="South Texas">South Texas </option>
                        <option value="North_Texas">North Texas</option>
                        <option value="West_Texas">West Texas</option>
                    </select> */}


                            <button
                                disabled={
                                    !(
                                        formState.username &&
                                        formState.email &&
                                        formState.password

                                    )
                                }
                                type="submit"
                                variant="success"
                                className='btn btn-primary d-block w-100 m-1'>
                                Submit
                            </button>
                        </form>
                        {error && <div>Sign up failed</div>}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SignUp;