import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';
import '../stylesheets/components/Header.scss';


const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='Liquid Holaday Manager' />
            </Link>
        </header>
    )
}

export default Header;