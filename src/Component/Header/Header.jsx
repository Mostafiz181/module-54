import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>this is header page</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            
            

        </div>
    );
};

export default Header;