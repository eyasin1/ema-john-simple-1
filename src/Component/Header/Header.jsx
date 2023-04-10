import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header' >

            <h2>CarrereHub</h2>
            <div>
                <a href="/Statistics">Statistics</a>
                <a href="/Applied Jobs">Applied Jobs</a>
                <a href="/Blog">Blog</a>
            </div>

            <button className='ApplyButton' >Start Applying</button>
        </nav>
    );
};

export default Header;