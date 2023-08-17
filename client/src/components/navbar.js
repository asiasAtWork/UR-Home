import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import navbarStyles from '../css_modules/Navbar.module.css'
import { ReactComponent as Logo } from '../assets/moon-magic-logo.svg';

const Navbar = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <Logo />
            <div className={navbarStyles.navlinks}>
                <div className={navbarStyles.navdropdown}>
                    <button className={navbarStyles.navdropdown}>
                        All Flowers
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
