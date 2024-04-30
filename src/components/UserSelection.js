// UserSelection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teaImage from '../assets/symbol.jpg'; // Import a tea-related image
import backgroundImage from '../assets/home-bg.jpg'; // Import a background image
import QuoteMessage from './QuoteMessage'; // Import the QuoteMessage component

function UserSelection() {
    const navigate = useNavigate();

    const handleNewUser = () => {
        navigate('/signup'); // Navigate to the signup route
    };

    const handleExistingUser = () => {
        navigate('/login'); // Navigate to the login route
    };

    const [newUserButtonHover, setNewUserButtonHover] = useState(false);
    const [existingUserButtonHover, setExistingUserButtonHover] = useState(false);

    return (
        <div style={styles.container}>
            <QuoteMessage /> {/* Display the quote message */}
            <div style={styles.content}>
                <img 
                    src={teaImage} 
                    alt="TeaImage" 
                    style={{ ...styles.image, animation: 'zoomInOut 3s infinite alternate' }} // Apply inline animation style
                />
                <h2 style={styles.heading}>Welcome to Tea Booking</h2>
                <p style={styles.text}>Manage your tea bookings with ease!</p>
                <div style={styles.buttonContainer}>
                    <button 
                        style={{ 
                            ...styles.button, 
                            ...styles.newUserButton,
                            border: newUserButtonHover ? '.2rem dashed var(--main-color)' : '.2rem dashed transparent',
                        }} 
                        onClick={handleNewUser}
                        onMouseEnter={() => setNewUserButtonHover(true)}
                        onMouseLeave={() => setNewUserButtonHover(false)}
                    >
                        New User
                    </button>
                    <button 
                        style={{ 
                            ...styles.button, 
                            ...styles.existingUserButton,
                            border: existingUserButtonHover ? '.2rem dashed var(--main-color)' : '.2rem dashed transparent',
                        }} 
                        onClick={handleExistingUser}
                        onMouseEnter={() => setExistingUserButtonHover(true)}
                        onMouseLeave={() => setExistingUserButtonHover(false)}
                    >
                        Existing User
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative', // Set position to relative to contain the quote message
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`, // Use the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    content: {
        textAlign: 'center',
    },
    image: {
        width: '200px', // Adjust the size as needed
        marginBottom: '20px',
        borderRadius: '50%',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', // Soft shadow
    },
    heading: {
        fontSize: '32px',
        marginBottom: '10px',
        color: '#333', // Dark gray color
    },
    text: {
        fontSize: '18px',
        marginBottom: '40px',
        color: '#666', // Medium gray color
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        borderRadius: '50px',
        color: '#443',
        background: 'none',
        cursor: 'pointer',
        transition: 'border .2s linear', // Transition only border property
    },
    newUserButton: {
        backgroundColor: 'transparent',
    },
    existingUserButton: {
        backgroundColor: 'transparent',
    },
};

export default UserSelection;
