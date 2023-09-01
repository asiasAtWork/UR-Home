import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import navbarStyles from '../css_modules/Navbar.module.css';
import { ReactComponent as Logo } from '../assets/moon-magic-logo.svg';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={`${navbarStyles.navbar}`}>
            <NavLink to="/landing">
                <Logo />
            </NavLink>
            <div className={`${navbarStyles.navlinkcontainer}`}>
                <div className={navbarStyles.navDropdown}>
                    All Flowers
                    <FontAwesomeIcon className={`${navbarStyles.dropdownicon}`} icon={faChevronDown} size="2xs" />
                </div>
                <div className={navbarStyles.navDropdown}>
                    All Plants
                    <FontAwesomeIcon className={`${navbarStyles.dropdownicon}`} icon={faChevronDown} size="2xs" />
                </div>
                <div className={navbarStyles.navDropdown}>
                    Occasions
                    <FontAwesomeIcon className={`${navbarStyles.dropdownicon}`} icon={faChevronDown} size="2xs" />
                </div>
                <NavLink className={navbarStyles.navlink} to="/products">Gift Baskets</NavLink>
                <NavLink className={navbarStyles.navlink} to="/subscriptions">Subscriptions</NavLink>
                <NavLink className={navbarStyles.navlink} to="/about-us">About Us</NavLink>
            </div>
            <div className={`dark-brown ${navbarStyles.navicons}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <FontAwesomeIcon icon={faUser}/>
                <FontAwesomeIcon icon={faCartShopping}/>
            </div>
        </nav>
    )
}

export default Navbar;
