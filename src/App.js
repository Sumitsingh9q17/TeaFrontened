import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserSelection from './components/UserSelection';
import SplashScreen from './components/Splashscreen';
import HomePage from './components/HomePage';
import ProductsPage from './components/Products';
import YourCart from './components/Your_Cart'; // Import YourCart component
import PaymentPage from './components/payment';
import About from './components/about';
function App() {
    const [showLogo, setShowLogo] = useState(true);
    const [cartItems, setCartItems] = useState([]); // State to manage cart items
    const [allProducts] = useState([]); // State to store all products

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false); // Hide the logo after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, []);

    

    // Function to handle adding items to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to handle removing items from the cart
    const removeItemFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    // Function to handle saving items for later
    const saveItemForLater = (index) => {
        // Implement logic to save item for later
        console.log("Item saved for later:", cartItems[index]);
    };

    // Function to handle quantity change
    const handleQuantityChange = (index, quantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = quantity;
        setCartItems(updatedCartItems);
    };

    return (
        <Router>
            <div className="App">
                {showLogo ? <Logo /> : null} {/* Display the logo if showLogo is true */}
                <Routes>
                    <Route path="/" element={<SplashScreen />} /> {/* Route for SplashScreen */}
                    <Route path="/user-selection" element={<UserSelection />} /> {/* Route for UserSelection */}
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm/>}/>
                    <Route path ="/homepage" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductsPage addToCart={addToCart} />} /> {/* Pass addToCart function to ProductsPage */}
                    {/* Pass cartItems, allProducts, and cart management functions to YourCart */}
                    <Route path="/cart" element={<YourCart cartItems={cartItems} allProducts={allProducts} removeItemFromCart={removeItemFromCart} saveItemForLater={saveItemForLater} handleQuantityChange={handleQuantityChange} />} />
               <Route path="/products" element={<ProductsPage />} />
                  <Route path="/payment" element={<PaymentPage/>}/>
                  <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
