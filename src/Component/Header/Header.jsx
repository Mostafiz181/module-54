import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>this is header page</h1>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            
            

        </div>
    );
};

export default Header;