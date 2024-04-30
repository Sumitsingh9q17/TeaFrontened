import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg.jpg'; // Import a background image
import teaImage1 from '../assets/tea1.png';
import teaImage2 from '../assets/tea2.png';
import teaImage3 from '../assets/tea3.png';
import teaImage4 from '../assets/tea4.png';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [imageIndex, setImageIndex] = useState(0);
    const images = [teaImage1, teaImage2, teaImage3, teaImage4];
    const [showRipple, setShowRipple] = useState(false); // Define showRipple state

    // Function to cycle through images
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [images]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data); // Log the response data for debugging
            if (response.ok) {
                // Save token to local storage or state for future requests
                localStorage.setItem('token', data.token);
                navigate('/homepage');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Failed to log in. Please try again later.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: `url(${backgroundImage}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            padding: '20px',
            position: 'relative', // Add position relative to contain the ripple effect
            overflow: 'hidden', // Hide overflow to clip the expanding box
        }}>
            <style>
                {`
                .ripple-effect {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, transparent 70%);
                    background-repeat: no-repeat;
                    background-position: center;
                    animation: ripple-animation 1s linear forwards;
                    pointer-events: none; /* Ensure the ripple effect does not interfere with mouse events */
                }

                @keyframes ripple-animation {
                    from {
                        transform: scale(0);
                        opacity: 1;
                    }
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                `}
            </style>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
                backgroundColor: '#F3ECE7',
                zIndex: '1', // Ensure the box is above other elements
                animation: showRipple ? 'ripple 1s linear' : 'none', // Apply ripple animation if ripple is shown
            }}>
                <img src={images[imageIndex]} alt="Tea Cup" style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block',
                    marginBottom: '20px',
                    borderRadius: '20px',
                    animation: 'fadeInDown 1s'
                }} />
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontFamily: 'cursive',
                    color: '#4E342E',
                    animation: 'fadeInDown 1s'
                }}>Tea Cafe Login</h2>
                <form onSubmit={handleLogin} style={{
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: '#FFFFFF',
                    animation: 'fadeInUp 1s',
                    position: 'relative', // Position relative to contain the pseudo-element
                }}>
                    {/* Ripple effect */}
                    {showRipple && <div className="ripple-effect" />}
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontFamily: 'cursive', color: '#4E342E', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setShowRipple(true)} // Show ripple effect when input field is focused
                            onBlur={() => setShowRipple(false)} // Hide ripple effect when input field loses focus
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '3px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', fontFamily: 'cursive', color: '#4E342E', marginBottom: '5px' }}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setShowRipple(true)} // Show ripple effect when input field is focused
                            onBlur={() => setShowRipple(false)} // Hide ripple effect when input field loses focus
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '3px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '3px',
                        border: 'none',
                        backgroundColor: '#8D6E63',
                        color: '#fff',
                        cursor: 'pointer',
                        animation: 'fadeIn 1s'
                    }}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
