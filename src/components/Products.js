import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faShoppingCart, faHistory, faInfo, faSearch, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import productCategories from './productCategories'; // Import product category data
import cafeBackground from '../assets/banner2.jpg'; // Import cafe background image
import './ProductsPage.css'; // Import CSS file for styling

function Products({ addToCart }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [quantityInputValues, setQuantityInputValues] = useState({});
    const [isCartIconAnimated, setIsCartIconAnimated] = useState(false);

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle quantity change
    const handleQuantityChange = (productId, value) => {
        setQuantityInputValues({ ...quantityInputValues, [productId]: value });
    };

    // Similar header functionality as in HomePage component
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    const toggleMessageBox = () => {
        setIsMessageBoxVisible(!isMessageBoxVisible);
    };

    const handleAddToCart = (product) => {
        const quantity = quantityInputValues[product.id] || 1;
        addToCart({ ...product, quantity });
        setIsCartIconAnimated(true); // Trigger animation
        setTimeout(() => {
            setIsCartIconAnimated(false); // Reset animation after a short delay
        }, 500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Header */}
            <header style={{ 
                backgroundImage: `url(${cafeBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#FFF',
                fontFamily: 'cursive',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '2em' }}>
                    <FontAwesomeIcon icon={faCoffee} style={{ marginRight: '10px', fontSize: '1.5em' }} />
                    <span>Tea Time Cafe</span>
                </div>
                <nav style={{ display: 'flex', alignItems: 'center', fontSize: '1.2em' }}>
                    <Link to="/homepage" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.2em' }} /> Home</Link>
                    <Link to="/products" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faCoffee} style={{ fontSize: '1.2em' }} /> Products</Link>
                    <Link to="/cart" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faShoppingCart} className={isCartIconAnimated ? "cart-icon animated" : "cart-icon"} style={{ fontSize: '1.2em' }} /> Your Cart</Link> {/* Link to Your Cart page */}
                    <Link to="/history" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faHistory} style={{ fontSize: '1.2em' }} /> History</Link>
                    <Link to="/about" style={{ marginRight: '20px', color: '#FFF', textDecoration: 'none' }}><FontAwesomeIcon icon={faInfo} style={{ fontSize: '1.2em' }} /> About</Link>
                </nav>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'relative', marginRight: '20px' }}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} onClick={toggleSearchBar} />
                    </div>
                    <div style={{ position: 'relative', marginRight: '20px' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} onClick={toggleMessageBox} />
                    </div>
                    <div style={{ position: 'relative', marginRight: '20px' }}>
                        <FontAwesomeIcon icon={faShoppingCart} className={isCartIconAnimated ? "cart-icon animated" : "cart-icon"} style={{ fontSize: '1.2em', color: '#FFF', cursor: 'pointer' }} />
                    </div>
                    <FontAwesomeIcon icon={faUser} style={{ color: '#FFF', cursor: 'pointer', fontSize: '1.5em' }} />
                </div>
            </header>
            {/* Main content */}
            <div style={{ display: 'flex', flex: 1 }}>
                {/* Sidebar for product categories */}
                <div className="sidebar">
                    <h2 className="category-heading">Categories</h2>
                    <ul className="category-list">
                        {productCategories.map(category => (
                            <li key={category.id} className="category-item">
                                <button 
                                    onClick={() => handleCategorySelect(category)} 
                                    className={selectedCategory === category ? 'active' : ''}
                                    style={{ backgroundColor: selectedCategory === category ? category.color : 'transparent' }}
                                >
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} 
                                    />
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Main content area for products */}
                <div className="main-content">
                    <h2 style={{ marginBottom: '20px', color: '#333' }}>Products</h2>
                    {selectedCategory ? (
                        <div>
                            <h3 style={{ marginBottom: '10px', color: '#333' }}>{selectedCategory.name}</h3>
                            <div className="product-grid">
                                {selectedCategory.products.map(product => (
                                    <div 
                                        key={product.id} 
                                        className="product-item"
                                    >
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="product-image"
                                        />
                                        <p className="product-name">{product.name}</p>
                                        <div className="product-details">
                                            <div className="quantity-selector">
                                                <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                                                <input 
                                                    type="number" 
                                                    id={`quantity-${product.id}`} 
                                                    name={`quantity-${product.id}`} 
                                                    min="1" 
                                                    defaultValue="1"
                                                    className="quantity-input"
                                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                                />
                                            </div>
                                            <button 
                                                className="add-to-cart-button"
                                                onClick={() => handleAddToCart(product)} // Add to Cart functionality
                                            >
                                                Add to Cart
                                            </button>
                                            <span className="view-details">View Details</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p style={{ color: '#333' }}>Select a category to view products.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
