import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/user-selection'); // Navigate to the UserSelection component after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, [navigate]);

    // No return statement, component doesn't render anything
}

export default SplashScreen;
