import React from 'react';
import Nav from '../Nav';
import TxFlag from '../../assets/images/txflag.jpg'


function Header() {

    return (

        <header className="container-fluid" style={{
            height: '100%', backgroundImage: `url(${TxFlag})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
            position: "fixed",
            zIndex: -1,
            left: '0',
            top: '0',

        }} >
            {/* 
            <div className="row">
                <Nav />
            </div > */}

        </header >


    )
};

export default Header;