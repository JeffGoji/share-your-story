import React from 'react';
import { NavLink } from 'react-router-dom'



function Nav() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">

            <h2 className="p-2 text-white">Share Your Story</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" aria-current="page" to="main">Main Page</NavLink>
                    </li>
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="test">Test Page</NavLink>
                    </li>
                    <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="test">Link 3</NavLink>
                    </li>                         <li className="nav-item fs-5">
                        <NavLink className="nav-link" to="#">Link 4</NavLink>
                    </li>

                </ul>

            </div>

        </nav >

    );
}

export default Nav;