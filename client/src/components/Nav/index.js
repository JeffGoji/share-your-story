import React from 'react';
import { NavLink } from 'react-router-dom'
import Auth from '../../utils/auth';



function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark mb-2 bg1" style={{ height: 'auto' }}>

            <h2 className="p-2 text-white shadow-text">Share Your Story</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="home">Home</NavLink>
                    </li>
                    {/* <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="allstories">Stories</NavLink>
                    </li> */}
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="#">News</NavLink>
                    </li>
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="profile">Dashboard</NavLink>
                    </li>
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="resources">Resources</NavLink>
                    </li>
                </ul>

                <div className="col-md-0 text-end">

                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to="/profile"><button type="button" className="btn btn-outline-light m-1">Me</button></NavLink>
                            <a href="/" onClick={logout}><button type="button" className="btn btn-warning m-1">Logout</button></a>

                        </>

                    ) : (
                        <>
                            <NavLink to="Login">
                                <button type="button" className="btn btn-outline-light m-1">Login</button>
                            </NavLink>


                            <NavLink to="SignUp">
                                <button type="button" className="btn btn-warning m-1">Sign-up</button>
                            </NavLink>
                        </>
                    )}

                </div>

            </div >



        </nav >

    );
}

export default Nav;