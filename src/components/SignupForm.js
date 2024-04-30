import React, { useState } from 'react';
import backgroundImage from '../assets/bg3.jpg'; // Import a background image
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);
    const [showRipple, setShowRipple] = useState(false); // Define showRipple state
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSignup = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://teabackend.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setShowThankYou(true);
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            } else if (response.status === 400 && data.message === "Email already exists") {
                alert("Email already exists. Please use a different email address.");
            } else  {
                console.error('Signup failed:', data.message);
                alert('Failed to sign up. Please try again later.');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Failed to sign up. Please try again later.');
        }
    };
    

    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '20px',
                background: `url(${backgroundImage}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                position: 'relative', // Add position relative to contain the ripple effect
                overflow: 'hidden', // Hide overflow to clip the expanding box
            }}
        >
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

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
            <div 
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '400px',
                    width: '100%',
                    padding: '20px',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
                    backgroundColor: '#F3ECE7',
                    zIndex: '1', // Ensure the box is above other elements
                    animation: showThankYou ? 'ripple 1s linear' : 'none', // Apply ripple animation if thank you message is shown
                }}
            >
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontFamily: 'cursive',
                    color: '#4E342E',
                    animation: 'fadeInUp 1s' // Sync the animation timing
                }}>Create an Account</h2>
                <form onSubmit={handleSignup} style={{
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: '#FFFFFF',
                    animation: 'fadeInUp 1s', // Sync the animation timing
                }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', fontFamily: 'cursive', color: '#4E342E', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '3px',
                                border: '1px solid #ccc',
                            }}
                            onMouseOver={() => setShowRipple(true)} // Show ripple effect when mouse enters the input field
                            onMouseLeave={() => setShowRipple(false)} // Hide ripple effect when mouse leaves the input field
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontFamily: 'cursive', color: '#4E342E', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '3px',
                                border: '1px solid #ccc',
                            }}
                            onMouseOver={() => setShowRipple(true)} // Show ripple effect when mouse enters the input field
                            onMouseLeave={() => setShowRipple(false)} // Hide ripple effect when mouse leaves the input field
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', fontFamily: 'cursive', color: '#4E342E', marginBottom: '5px' }}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '3px',
                                border: '1px solid #ccc',
                            }}
                            onMouseOver={() => setShowRipple(true)} // Show ripple effect when mouse enters the input field
                            onMouseLeave={() => setShowRipple(false)} // Hide ripple effect when mouse leaves the input field
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
                        animation: 'fadeInUp 1s', // Sync the animation timing
                    }}>
                        Sign Up
                    </button>
                </form>
                {/* Thank you message */}
                {showThankYou && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#4CAF50', // Green color
                        color: '#FFF',
                        padding: '20px',
                        borderRadius: '10px',
                        fontSize: '1.5em',
                        zIndex: '2', // Ensure the message box is above other elements
                        animation: 'fadeInUp 1s', // Sync the animation timing
                    }}>
                        Thank you for signing up!
                    </div>
                )}
            </div>
            {/* Ripple effect */}
            {showRipple && <div className="ripple-effect" />}
        </div>
    );
}

export default SignupForm;
