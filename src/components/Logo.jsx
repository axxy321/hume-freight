import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="custom-logo">
            <img
                src="/images/logo.jpg"
                alt="Hume Freight Logo"
                className="logo-image"
            />
        </div>
    );
};

export default Logo;
