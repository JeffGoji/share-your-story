import React from 'react';
import { NavLink } from 'react-router-dom'
import Auth from '../../utils/auth';
import '../../index.css'


function Nav() {
    const loggedIn = Auth.loggedIn();

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark mb-2 bg1" style={{ height: 'auto' }}>

            <h2 className="p-2 text-white shadow-text fs-1">Share Your Story</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fs-1" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 fs-3 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="allstories">Stories</NavLink>
                    </li>

                    {loggedIn && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="profile">Dashboard</NavLink>
                        </li>)}
                    <li li className="nav-item">
                        <NavLink className="nav-link" to="resources">Resources</NavLink>
                    </li>
                </ul>

                <div className="col-md-0 text-end">

                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to="/profile"><button type="button" className="btn btn-lg btn-outline-light m-1">Me</button></NavLink>
                            <a href="/" onClick={logout}><button type="button" className="btn btn-lg btn-warning m-1">Logout</button></a>

                        </>

                    ) : (
                        <>
                            <NavLink to="Login">
                                <button type="button" className="btn btn-lg btn-outline-light m-1">Login</button>
                            </NavLink>


                            <NavLink to="SignUp">
                                <button type="button" className="btn btn-lg btn-warning m-1">Sign-up</button>
                            </NavLink>
                        </>
                    )}

                </div>

            </div >



        </nav >

    );
}

export default Nav;