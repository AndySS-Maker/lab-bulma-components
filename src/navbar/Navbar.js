import React from 'react';

function Navbar() {
    return (
        <div className='nav-bar'>
        <div className='nav-bar-left-side'>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        <a>Home</a>
        </div>
        <div className='nav-bar-right-side'>
        <botton className='botton-nav-bar login-nav'>Login</botton>
        <botton className='botton-nav-bar signup-nav'>Signup</botton>
        </div>
    </div>
    );
}

export default Navbar; 