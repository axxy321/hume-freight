import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "./ui/animated-shader-hero";

const HeroDemo = () => {
    const navigate = useNavigate();

    const handlePrimaryClick = () => {
        navigate('/');
    };

    const handleSecondaryClick = () => {
        navigate('/');
    };

    return (
        <div className="w-full relative z-50">
            <Hero
                trustBadge={{
                    text: "Precision Logistics Network",
                    icons: ["✨"]
                }}
                headline={{
                    line1: "Accelerate Your",
                    line2: "Freight Into Orbit"
                }}
                subtitle="Supercharge your supply chain with our next generation cargo transport — fast, seamless, and limitless."
                buttons={{
                    primary: {
                        text: "Get Started",
                        onClick: handlePrimaryClick
                    },
                    secondary: {
                        text: "Explore Features",
                        onClick: handleSecondaryClick
                    }
                }}
            />
        </div>
    );
};

export default HeroDemo;
