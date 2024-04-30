import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faShoppingCart, faHistory, faInfo, faSearch, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import cafeBackground from '../assets/bgg.jpg'; // Import cafe background imageimport { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import phone and envelope icons
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import social media icons

import './homepage.css';
import ProductCard from './ProductCard';
import './testimonials.css';
import lassiImage from '../assets/lassii.jpg';
import cokeImage from '../assets/coke.jpg';
import hotMilkImage from '../assets/hotmilk.jpg';
import waterImage from '../assets/water.jpg';
import juiceImage from '../assets/juice.jpg';
import crusherImage from '../assets/crusher.jpg';
import johnDoeImage from '../assets/pic-1.png';
import JaneSmith from '../assets/pic-2.png';
import MichaelJhonson from '../assets/pic-3.png';
import Promotion from '../assets/promotion.jpg'
const beveragesProducts = [
    { id: 1, name: 'Lassi', description: 'Refreshing yogurt-based drink.', price: 2.99, image: lassiImage },
    { id: 2, name: 'Coca Cola', description: 'Classic carbonated soft drink.', price: 3.49, image: cokeImage },
    { id: 3, name: 'Hot Milk', description: 'Warm and comforting.', price: 3.49, image: hotMilkImage },
    { id: 4, name: 'Water', description: 'Hydrating and essential.', price: 3.49, image: waterImage },
    { id: 5, name: 'Juice', description: 'Freshly squeezed fruit juice.', price: 3.49, image: juiceImage },
    { id: 6, name: 'Crushers', description: 'Flavored carbonated beverages.', price: 3.49, image: crusherImage }
];

function HomePage() {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // State for search bar visibility
    const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false); // State for message box visibility
    const searchBarRef = useRef(null); // Reference to search bar element
    const messageBoxRef = useRef(null); // Reference to message box element

    // Function to close search bar when clicked outside
    const handleClickOutsideSearch = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setIsSearchBarVisible(false);
        }
    };

    // Function to close message box when clicked outside
    const handleClickOutsideMessage = (event) => {
        if (messageBoxRef.current && !messageBoxRef.current.contains(event.target)) {
            setIsMessageBoxVisible(false);
        }
    };

    // Effect to add event listeners when component mounts
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideSearch);
        document.addEventListener('mousedown', handleClickOutsideMessage);

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSearch);
            document.removeEventListener('mousedown', handleClickOutsideMessage);
        };
    }, []);

    // Toggle visibility of search bar
    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    // Toggle visibility of message box
    const toggleMessageBox = () => {
        setIsMessageBoxVisible(!isMessageBoxVisible);
    };

    // Function to handle adding a product to cart
    const handleAddToCart = (product) => {
        // Implement your logic here to add the product to the cart
        console.log('Product added to cart:', product);
    };

    return (
        <div>
            <header style={{ 
                backgroundImage: `url(${cafeBackground})`, // Set background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px 20px', // Increase padding
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#FFF',
                fontFamily: 'cursive', // Use custom font
            }}>
                {/* Tea Cup icon and name */}
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '2em' }}> {/* Increase font size */}
                    <FontAwesomeIcon icon={faCoffee} style={{ marginRight: '10px', fontSize: '1.5em' }} /> {/* Increase icon size */}
                    <span>Tea Time Cafe</span> {/* Change cafe name */}
                </div>
                {/* Navigation options */}
                <nav style={{ display: 'flex', alignItems: 'center', fontSize: '1.2em' }}>
                    <Link to="/homepage" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.2em' }} /> Home</Link>
                    <Link to="/products" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faCoffee} style={{ fontSize: '1.2em' }} /> Products</Link>
                    <Link to="/cart" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.2em' }} /> Your Cart</Link> {/* Update text */}
                    <Link to="/history" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faHistory} style={{ fontSize: '1.2em' }} /> History</Link>
                    <Link to="/about" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faInfo} style={{ fontSize: '1.2em' }} /> About</Link>
                </nav>
                {/* Container for search, message, and account icons */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Search icon or search bar */}
                    <div style={{ position: 'relative', marginRight: '20px' }} ref={searchBarRef}>
                        {isSearchBarVisible ? (
                            <input type="text" placeholder="Search..." style={{ width: '200px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        ) : (
                            <FontAwesomeIcon icon={faSearch} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} onClick={toggleSearchBar} />
                        )}
                    </div>
                    {/* Message icon */}
                    <div style={{ position: 'relative', marginRight: '20px' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} onClick={toggleMessageBox} />
                        {/* Message box */}
                        {isMessageBoxVisible && (
                            <div style={{ position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFF', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', zIndex: '999' }} ref={messageBoxRef}>
                                {/* Message box content goes here */}
                                <h3>Your Recent Messages</h3>
                                <p>This is a sample message.</p>
                                {/* View all messages button */}
                                <button style={{ backgroundColor: '#8D6E63', color: '#FFF', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View All Messages</button>
                            </div>
                        )}
                    </div>
                    {/* Account icon */}
                    <FontAwesomeIcon icon={faUser} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} /> {/* Increase icon size */}
                </div>
            </header>
            {/* Add content of the homepage below */}
            <div className="quotes">
                <h2>Welcome to Tea Time Cafe!</h2>
                <p>Explore our wide range of delicious teas and enjoy a cozy atmosphere.</p>
                {/* Your homepage content goes here */}
                <p>"Tea is the finest solution to nearly every catastrophe and challenge that the day may bring."</p>
                <p>"There are few hours in life more agreeable than the hour dedicated to the ceremony known as afternoon tea."</p>
            </div>
            <section className="promotions">
    <h2>Special Promotions</h2>
    <div className="promotion-cards">
        {/* Promotion Card 1 */}
        <div className="promotion-card">
            <img src={Promotion} alt="Special Discount" className="promotion-image" />
            <h3>Special Discount</h3>
            <p>Get 20% off on all teas!</p>
        </div>
        {/* Add more promotion cards as needed */}
    </div>
</section>

            <section className="events">
    <h2>Upcoming Events</h2>
    <div className="event-list">
        <div className="event">
            <h3>Tea Tasting</h3>
            <p>Join us for a free tea tasting event next Saturday!</p>
        </div>
        {/* Add more events here */}
    </div>
</section>

            <section className="testimonials">
    <h2>Customer Testimonials</h2>
    <div className="testimonial-cards">
        {/* Testimonial Card 1 */}
        <div className="testimonial-card">
            <img src={johnDoeImage} alt="John Doe" className="testimonial-image" style={{ width: '100px', height: '100px' }} />
            <p>"I love the variety of teas offered here. The staff is also very friendly and knowledgeable!"</p>
            <p>- John Doe</p>
        </div>
        {/* Testimonial Card 2 */}
        <div className="testimonial-card">
            <img src={JaneSmith} alt="Jane Smith" className="testimonial-image" style={{ width: '100px', height: '100px' }} />
            <p>"Great place to relax and enjoy a cup of tea. The ambiance is soothing, and the tea selection is impressive."</p>
            <p>- Jane Smith</p>
        </div>
        {/* Testimonial Card 3 */}
        <div className="testimonial-card">
            <img src={MichaelJhonson} alt="Michael Johnson" className="testimonial-image" style={{ width: '100px', height: '100px' }} />
            <p>"I've been coming here for years, and the quality of service and tea has never disappointed me. Highly recommended!"</p>
            <p>- Michael Johnson</p>
        </div>
        {/* Add more testimonial cards as needed */}
    </div>
</section>

            <section className="featured-beverages">
                <h2>Featured Beverages</h2>
                <div className="product-list">
                    {beveragesProducts.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
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
}

export default HomePage;
