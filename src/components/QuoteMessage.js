import React, { useState, useEffect } from 'react';

const quotes = [
    "Tea is liquid wisdom.",
    "A cup of tea makes everything better.",
    "Life is like a cup of tea, it's all in how you make it.",
    "Tea is a hug in a cup.",
    "Tea is the elixir of life.",
    // Add more quotes as needed
];

function QuoteMessage() {
    const [quote, setQuote] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Function to update the quote message
        const updateQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        };

        // Update the quote initially
        updateQuote();

        // Set interval to update the quote every 10 seconds
        const intervalId = setInterval(updateQuote, 10000);

        // Clean up function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Set timeout to toggle visibility every 5 seconds
        const timeoutId = setTimeout(() => {
            setIsVisible(prev => !prev);
        }, 5000);

        // Clean up function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, [isVisible]);

    return (
        <div style={styles.container}>
            {isVisible && <div style={styles.message}>{quote}</div>}
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        textAlign: 'center',
    },
    message: {
        backgroundColor: '#f8f9fa',
        color: '#212529',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '80%',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
    },
};

export default QuoteMessage;
