import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import navbarStyles from '../css_modules/Navbar.module.css'
import { ReactComponent as Logo } from '../assets/moon-magic-logo.svg';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={`${navbarStyles.navbar}`}>
            <NavLink to="/landing">
                <Logo />
            </NavLink>
            <div className={`dark-brown ${navbarStyles.navlinks}`}>
                <div className={navbarStyles.navDropdown}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        All Flowers
                        <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                    </button>
                </div>
                <div className={`dark-brown ${navbarStyles.navlink} ${navbarStyles.navDropdown}`}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        All Plants
                        <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                    </button>
                </div>
                <div className={navbarStyles.navDropdown}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        Occasions
                        <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                    </button>
                </div>
                <NavLink to="/products">Gift Baskets</NavLink>
                <NavLink to="/subscriptions">Subscriptions</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
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
