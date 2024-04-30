import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faShoppingCart, faHistory, faInfo } from '@fortawesome/free-solid-svg-icons';
import './about.css'; // Import CSS file

const About = () => {
    return (
        <div>
            {/* ABOUT SECTION */}
            <section className="about" id="about">
                <h1 className="heading">About us <span>Why choose us</span></h1>
                <div className="row">
                    <div className="image">
                        <img src={require("../assets/about-img.png")} alt="About us" />
                    </div>

                    <div className="content">
                        <h3 className="title">What makes our coffee special!</h3>
                        <p>
                            <ol>
                                <li><strong>Effortless Booking:</strong> With Tea Booking, reserving your spot at the finest tea establishments is a breeze. Our intuitive interface guides you through the booking process seamlessly.</li>
                                <li><strong>Customizable Preferences:</strong> Tailor your tea experience to perfection with our customizable preferences feature. From ambiance to tea selection, make every booking uniquely yours.</li>
                                <li><strong>Discover New Gems:</strong> Explore a curated selection of tea houses and cafes recommended by tea enthusiasts like yourself. Discover hidden gems and expand your tea horizons.</li>
                                <li><strong>Real-Time Availability:</strong> Say goodbye to double bookings and last-minute disappointments. Tea Booking provides real-time availability updates, ensuring a stress-free booking experience every time.</li>
                                <li><strong>User Profiles:</strong> Keep track of your favorite tea spots and past reservations with your personalized user profile. Easily manage bookings and preferences for a seamless tea journey.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER SECTION */}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Our Branches</h3>
                        <a href="#"><i className="fas fa-arrow-right"></i> Delhi</a>
                        <a href="#"><i className="fas fa-arrow-right"></i> Jaipur </a>
                        <a href="#"><i className="fas fa-arrow-right"></i> Phagwara</a>
                        <a href="#"><i className="fas fa-arrow-right"></i> Chandigarh</a>
                        <a href="#"><i className="fas fa-arrow-right"></i> Mumbai</a>
                    </div>

                    <div className="box">
                        <h3>Quick Links</h3>
                        <Link to="/homepage"><FontAwesomeIcon icon={faHome} /> Home</Link>
                        <Link to="/products"><FontAwesomeIcon icon={faCoffee} /> Products</Link>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Your Cart</Link>
                        <Link to="/history"><FontAwesomeIcon icon={faHistory} /> History</Link>
                        <Link to="/about"><FontAwesomeIcon icon={faInfo} /> About</Link>
                    </div>

                    <div className="box">
                        <h3>Contact Info</h3>
                        <a href="#"><i className="fas fa-phone"></i> +123-456-7890</a>
                        <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
                        <a href="#"><i className="fas fa-envelope"></i> coffee@gmail.com</a>
                        <a href="#"><i className="fas fa-envelope"></i> India</a>
                    </div>

                    <div className="box">
                        <h3>Follow Us</h3>
                        <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
                        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                        <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
