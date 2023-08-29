import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faStar } from '@fortawesome/free-solid-svg-icons'
import { faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import landingStyles from '../css_modules/Landing.module.css';

const Landing = () => {
    return (
        <div>
            <header>
                <div className={`${landingStyles.landingbanner}`}></div>
                <div className={`${landingStyles.landingbannercontent}`}>
                    <h1>Send Some Magic</h1>
                    <h2 className='font-light'>Show a loved one you care today!</h2>
                    <button className={`landing-button light-text-button`}>Shop Now</button>
                </div>
            </header>
            <FontAwesomeIcon icon={faCircleQuestion} className={`${landingStyles.helpicon}`} size="2xl"/>
            <section className={`${landingStyles.floweroptions}`}>
                <div className={`${landingStyles.floweroptionscontainer}`}>
                    <div className={`${landingStyles.floweroptionsdisplayimg1}`}></div>
                    <div className={`${landingStyles.floweroptionsillustration}`}></div>
                    <div className={landingStyles.floweroptionstext}>
                        <h1>Enchanting Options</h1>
                        <h3>The Moon Magic Florists offer a wide array of options.</h3>
                        <button className={`landing-button dark-text-button`}>All Flowers</button>
                    </div>
                </div>
                <div className={`${landingStyles.floweroptionsbanner}`}></div>
                <div className={`${landingStyles.floweroptionsgallery}`}>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg1}`}></div>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg2}`}></div>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg3}`}></div>
                </div>
            </section>
            <section className={landingStyles.baskets}>
                <div className={landingStyles.basketscontent}>
                    <div className={landingStyles.basketsillustration}></div>
                    <h1>Spellbinding <br/> Baskets</h1>
                    <h3>Flowers, and sweets, and wine, <br/> oh my!</h3>
                    <button className={`landing-button light-text-button`}>Shop Gift Baskets</button>
                </div>
                <div className={landingStyles.basketsimg}></div>
            </section>
            <section className={landingStyles.treats}>
                <div className={landingStyles.treatsimg}></div>
                <div className={landingStyles.treatscontent}>
                    <h1>Charming Treats</h1>
                    <h3>Moon Magic Florist offers <br/> subscription services as well!</h3>
                    <button button className={`landing-button dark-text-button`}>Learn More</button>
                </div>
            </section>
            <section className={landingStyles.popularitems}>
                <h1>Our Supernatural Sellers</h1>
                <hr className={landingStyles.popularitemsdivider}/>
                <div className={landingStyles.popularitemgallery}>
                    <div className={landingStyles.productitemcontainer}>
                        <div className={`${landingStyles.productitemimg} ${landingStyles.productitem1}`}></div>
                        <p className={landingStyles.productitemtitle}>Spring Fairy</p>
                        <p className={landingStyles.productprice}>$24.99</p>
                    </div>
                    <div className={landingStyles.productitemcontainer}>
                        <div className={`${landingStyles.productitemimg} ${landingStyles.productitem2}`}></div>
                        <p className={landingStyles.productitemtitle}>Sun Drop</p>
                        <p className={landingStyles.productprice}>$34.99</p>
                    </div>
                    <div className={landingStyles.productitemcontainer}>
                        <div className={`${landingStyles.productitemimg} ${landingStyles.productitem3}`}></div>
                        <p className={landingStyles.productitemtitle}>Desert Dreamer</p>
                        <p className={landingStyles.productprice}>$34.99</p>
                    </div>
                    <div className={landingStyles.productitemcontainer}>
                        <div className={`${landingStyles.productitemimg} ${landingStyles.productitem4}`}></div>
                        <p className={landingStyles.productitemtitle}>Poppy Puff</p>
                        <p className={landingStyles.productprice}>$34.99</p>
                    </div>
                    <div className={landingStyles.productitemcontainer}>
                        <div className={`${landingStyles.productitemimg} ${landingStyles.productitem5}`}></div>
                        <p className={landingStyles.productitemtitle}>Sun Star</p>
                        <p className={landingStyles.productprice}>$39.99</p>
                    </div>
                </div>
                <hr className={landingStyles.popularitemsdivider}/>
                <div class={landingStyles.popularitemsbuttoncontainer}>
                    <div className={landingStyles.popularitemsdecorR}></div>
                    <button className={`landing-button light-text-button`}>View Top Sellers</button>
                    <div className={landingStyles.popularitemsdecorL}></div>
                </div>
            </section>
            <section className={landingStyles.testimonials}>
                <div className={landingStyles.testimonialheader}>
                    <h1>Testimonial</h1>
                    <div className={landingStyles.testimonialdecor}></div>
                </div>
                <div className={landingStyles.testimonialcontainer}>
                    <div className={landingStyles.testimonial}>
                        <div className={landingStyles.testimonialrating}>
                            <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                            <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                            <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                            <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                            <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                        </div>
                        <div className={landingStyles.testimonialdescription}>
                            <p>“The Sun Drop was absolutely beautiful! 
                            My girlfriend loved it and it arrived right on time 
                            for our anniversary! Will be buying again!” </p>
                        </div>
                        <div className={landingStyles.testimonialauthor}></div>
                            <p>- Mark L.</p>
                        <div className={landingStyles.testimonialsite}>
                            <FontAwesomeIcon icon={faYelp} size="2xl"/>
                        </div>
                    </div> 
                    <div className={landingStyles.testimonial}>
                    <div className={landingStyles.testimonialrating}>
                        <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                        <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                        <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                        <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                        <FontAwesomeIcon icon={faStar} className={`${landingStyles.ratingicon}`} size="2xl"/>
                    </div>
                    <div className={landingStyles.testimonialdescription}>
                        <p>
                        "If you’re going to buy a bouquet then Poppy Puff 
                        is one of the best! It’s so beautiful!"
                        </p>
                    </div>
                    <div className={landingStyles.testimonialauthor}>
                        <p>- Lorie B.</p>
                    </div>
                    <div className={landingStyles.testimonialsite}>
                        <FontAwesomeIcon icon={faGoogle} size="2xl"/>
                    </div>
                    </div> 
                </div>
                <div class={landingStyles.testimonialbanner}></div>
            </section>
        </div>
    )
}

export default Landing;