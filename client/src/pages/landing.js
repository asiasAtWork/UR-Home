import React from 'react';
import landingStyles from '../css_modules/Landing.module.css';

const Landing = () => {
    return (
        <div>
            <header>
                <div className={`${landingStyles.landingbanner}`}></div>
                <div className={`${landingStyles.landingbannercontent}`}>
                    <h1>Send Some Magic</h1>
                    <h2 className='font-light'>Show a loved one you care today!</h2>
                    <button className={`landing-button ${landingStyles.landingbannerbutton}`}>Shop Now</button>
                </div>
            </header>
        </div>
    )
}

export default Landing;