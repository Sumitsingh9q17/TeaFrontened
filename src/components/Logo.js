import React from 'react';
import logoImg from '../assets/symbol.jpg';

function Logo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: '#F0F1CC', position: 'relative' }}>
            <img 
                src={logoImg} 
                alt="Tea Booking Logo" 
                style={{ ...styles.logo, animation: 'zoomInOut 1s infinite alternate' }} // Apply inline animation style
            />
        </div>
    );
}

const styles = {
    logo: {
        position: 'relative',
        zIndex: '1',
        borderRadius: '50%',
        width: '300px',
        height: '300px',
    },
};

// Inline CSS animation keyframes
const animationStyles = `
    @keyframes zoomInOut {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }
`;

// Append animation styles to the head of the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default Logo;
