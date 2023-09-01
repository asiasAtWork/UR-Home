import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import footerStyles from '../css_modules/Footer.module.css';
import { ReactComponent as Logo } from '../assets/moon-magic-logo.svg';

const Footer = () => {
    return (
        <footer className={`${footerStyles.footer}`}>
            <hr className={`${footerStyles.footerdivider}`}/>
            <Logo className={`${footerStyles.footerlogo}`}/>
            <div className={`${footerStyles.footercontent}`}>
                <p>Connect with Moon Magic Florist</p>
                <div className={`${footerStyles.footericons}`}>
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />
                    <FontAwesomeIcon icon={faTwitter} size="2xl" />
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    <FontAwesomeIcon icon={faYelp} size="2xl"/>
                    <FontAwesomeIcon icon={faGoogle} size="2xl"/>
                </div>
                <div className={`${footerStyles.footerlinks}`}>
                    <div className={`${footerStyles.footerlinksection}`}>
                        <p className={`font-light`}>Account Sign Up | Login</p>
                        <p className={`font-light`}>Terms of Service</p>
                        <p className={`font-light`}>Refund Policy</p>
                    </div>
                    <div className={`${footerStyles.footerlinksection}`}>
                        <p className={`font-light`}>Site Map</p>
                        <p className={`font-light`}>Careers</p>
                        <p className={`font-light`}>FAQs</p>
                    </div>
                </div>
                <p className={`font-light`}>Copyright © 2023 Moon Magic Florist | Designed and Developed by Asia T (asiaIsOnline)</p>
            </div>
        </footer>
    )
}

export default Footer;