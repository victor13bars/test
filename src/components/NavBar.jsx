import React from 'react';
import {NavLink} from 'react-router-dom'
const NavBar = () => {

    return (
        <div className='wrapper-nav'>
            <nav className='navLinks'>
                <NavLink to='/main' className='navLinks__navLink' activeClassName='navLinks__navLink_active'>Main</NavLink>
                <NavLink to='/settings' className='navLinks__navLink' activeClassName='navLinks__navLink_active'>Settings</NavLink>
                <NavLink to='/mapSettings' className='navLinks__navLink' activeClassName='navLinks__navLink_active'>Map Settings</NavLink>
                <NavLink to='/timer' className='navLinks__navLink' activeClassName='navLinks__navLink_active'>Timer</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;