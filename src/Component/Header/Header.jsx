import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to = "/friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            
            

        </div>
    );
};

export default Header;