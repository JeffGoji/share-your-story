import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Nav from '../Nav';
import MainPage from '../../pages/index';
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp';
import Resources from '../Resources/Resources'
import StoryList from '../StoryList'
import Profile from '../../pages/Profile'

import TxFlag from '../../assets/images/txflag.jpg'


function Header() {

    return (

        <header className="container-fluid" style={{
            height: '100%', backgroundImage: `url(${TxFlag})`,
            backgroundSize: 'cover',
            overflow: 'scroll',
            position: "fixed",
            zIndex: -1,
            left: '0',
            top: '0',

        }} >

            <div className="row">

                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path='/stories' element={<StoryList />} />
                        <Route path='/profile' element={<Profile />} />

                    </Routes>


                </BrowserRouter>


            </div >

        </header >


    )
};

export default Header;