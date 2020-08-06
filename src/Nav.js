import React from 'react';
import logo from './logo.svg';
import { AppLogo, NavBar, NavLinks } from './components';

import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <NavBar>
            <AppLogo src={logo} alt="logo" />
            <h1>React Saga</h1>  
            <NavLinks>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/movies'>
                    <li>Movies</li>
                </Link>
            </NavLinks>          
        </NavBar>
    )
}

export default Nav;