import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to="/review">Review</NavLink>
                <NavLink to="/manage">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;