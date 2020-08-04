import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React Saga</h1>  
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/movies'>
                    <li>Movies</li>
                </Link>
            </ul>          
        </nav>
    )
}

export default Nav;