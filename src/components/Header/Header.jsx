import React from 'react';
import logo from '../../images/logo.svg'
import  './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventoty">Inventory</a>
                <a href="/about">About</a>
            </nav>
        </div>
        
    );
};

export default Header;