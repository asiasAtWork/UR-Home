import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import navbarStyles from '../css_modules/Navbar.module.css'
import { ReactComponent as Logo } from '../assets/moon-magic-logo.svg';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={`${navbarStyles.navbar}`}>
            <Logo />
            <div className={`dark-brown ${navbarStyles.navlinks}`}>
                <div className={navbarStyles.navDropdown}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        All Flowers
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                </div>
                <div className={`dark-brown ${navbarStyles.navlink, navbarStyles.navDropdown}`}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        All Plants
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                </div>
                <div className={navbarStyles.navDropdown}>
                    <button className={`dark-brown ${navbarStyles.dropdownNavButton}`}>
                        Occasions
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                </div>
                <NavLink>Gift Baskets</NavLink>
                <NavLink>Subscriptions</NavLink>
                <NavLink>About Us</NavLink>
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
