import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/987px-Coronavirus_cartoon.svg';


import './header.styles.css';

const Header = () => (
    <div className='container-header'>
        <div className='logo-img'>
            <Link to="/">
                <img className='' src={logo} alt="logo" />
            </Link>
        </div>
        <nav className='nav-items'>
            <ul className='links'>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/Slovakia">
                    <li>Slovakia</li>
                </Link>
                <Link to="/news">
                    <li>News</li>
                </Link>
            </ul>
        </nav>
    </div>
)

export default Header;