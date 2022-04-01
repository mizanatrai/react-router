import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>This is Header section...</h1>
            <Link to='/' className='link'>Home</Link>
            <Link to='/friends' className='link'>Friends</Link>
            <Link to='/about' className='link'>About</Link>
        </div>
    );
};

export default Header;