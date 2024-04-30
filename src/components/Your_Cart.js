import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faShoppingCart, faHistory, faInfo, faSearch, faEnvelope, faUser, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import cafeBackground from '../assets/banner2.jpg';
import './yourCarts.css';

function YourCart({ cartItems, removeItemFromCart, clearCart, handleQuantityChange }) {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);
    const [shippingInfo, setShippingInfo] = useState({});
    const [shippingCost, setShippingCost] = useState(0);
    const [discountCode, setDiscountCode] = useState('');
    const searchBarRef = useRef(null); // Reference to search bar element
    const messageBoxRef = useRef(null);
    const [discountAmount, setDiscountAmount] = useState(0);

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

    const handleShippingInfoChange = (event) => {
        const { name, value } = event.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleSaveForLater = (index) => {
        const savedItem = cartItems[index];
        // Implement your logic to save the item for later
        console.log('Item saved for later:', savedItem);
    };

    const calculateShippingCost = () => {
        // Implement your logic to calculate shipping cost based on shippingInfo
        // For demonstration purposes, let's assume a flat rate of $10
        setShippingCost(10);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        console.log('Subtotal:', subtotal);
        console.log('Shipping Cost:', shippingCost);
        console.log('Discount Amount:', discountAmount);
        
        const total = subtotal + shippingCost - discountAmount;
        console.log('Total:', total);
        
        return total;
    };

    const applyDiscountCode = () => {
        // Mock implementation: Apply a fixed discount amount for a specific discount code
        const discountCodes = {
            'SAVE10': 10, // $10 off
            'SAVE20': 20, // $20 off
            // Add more discount codes here
        };

        if (discountCodes.hasOwnProperty(discountCode)) {
            setDiscountAmount(discountCodes[discountCode]);
        } else {
            // Invalid discount code
            alert('Invalid discount code. Please try again.');
        }
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
           
            {/* Your Cart content */}
            <div className="your-cart-content">
                <h2>Your Cart</h2>
                <button onClick={clearCart}>Clear Cart</button>
                <ul className="cart-items-list">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <div className="quantity-container">
                                    <label className="quantity-label">Quantity:</label>
                                    <input
                                        type="number"
                                        className="quantity-input"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="item-price">Price: ${item.price.toFixed(2)}</div>
                                <div className="item-actions">
                                    <button onClick={() => handleSaveForLater(index)}>
                                        <FontAwesomeIcon icon={faSave} /> Save for Later
                                    </button>
                                    <button className="remove-btn" onClick={() => removeItemFromCart(index)}>
                                        <FontAwesomeIcon icon={faTrash} /> Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="cart-summary">
                    <div className="total-price">Total: ${calculateTotal().toFixed(2)}</div>
                    <div className="shipping-info">
                        <h3>Shipping Information</h3>
                        <input type="text" name="name" placeholder="Name" onChange={handleShippingInfoChange} />
                        <input type="text" name="address" placeholder="Address" onChange={handleShippingInfoChange} />
                        <input type="text" name="city" placeholder="City" onChange={handleShippingInfoChange} />
                        <input type="text" name="country" placeholder="Country" onChange={handleShippingInfoChange} />
                        <button onClick={calculateShippingCost}>Calculate Shipping</button>
                        {shippingCost > 0 && <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>}
                    </div>
                    <div className="discount-code">
                        <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Enter discount code"
                        />
                        <button onClick={applyDiscountCode}>Apply</button>
                    </div>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
                        <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
                        <p>Discount: ${discountAmount.toFixed(2)}</p>
                        <p>Total: ${calculateTotal().toFixed(2)}</p>
                    </div>
                    <div className="checkout-buttons">
                        {/* Link to payment page */}
                        <Link to="/payment" className="checkout-btn"><button>Proceed to Checkout</button></Link>
                        {/* Link to products page */}
                        <Link to="/products" className="continue-shopping-btn"> <button>Continue Shopping </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourCart;
