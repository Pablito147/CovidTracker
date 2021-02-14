import React from 'react';
import { Link } from 'react-router-dom';

//import logo from '../../Assets / CovidLogo.jpg';

import './header.styles.css';

const Header = () => (
    <div className='container-header'>
        <nav className='nav-items'>
            <div className='logo'>
                {/* //<logo className='' /> */}
            </div>
            <ul className='links'>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/slovakia">
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