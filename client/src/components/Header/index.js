import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Nav from '../Nav';
import MainPage from '../../pages/index';
import Test from '../../pages/test'

function Header() {

    return (

        <header className="container-fluid">

            <div className="row">

                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/test" element={<Test />} />


                    </Routes>


                </BrowserRouter>


            </div >

        </header >


    )
};

export default Header;