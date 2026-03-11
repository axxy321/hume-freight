import React from 'react';
import { motion } from 'framer-motion';
import './Locations.css';

const LOCATIONS = [
    {
        id: 'brisbane',
        name: 'Brisbane',
        img: '/images/locations/brisbane.png',
    },
    {
        id: 'sydney',
        name: 'Sydney',
        img: '/images/locations/sydney.png',
    },
    {
        id: 'perth',
        name: 'Perth',
        img: '/images/locations/perth.png',
    },
    {
        id: 'adelaide',
        name: 'Adelaide',
        img: '/images/locations/adelaide.png',
    }
];

const Locations = () => {
    return (
        <section className="locations-section section-padding" id="locations">
            <div className="container">
                <motion.div
                    className="locations-header-centered"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                >
                    <span className="kicker accent-text">Where We Service</span>
                    <h2 className="section-title">
                        Australia-Wide Shipping – <span className="text-gradient">Delivering Your Needs Nationwide</span> With Ease
                    </h2>
                </motion.div>

                <div className="locations-grid">
                    {LOCATIONS.map((location, index) => (
                        <motion.div
                            key={location.id}
                            className="location-card"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                        >
                            <div className="location-image-wrapper">
                                <img src={location.img} alt={location.name} className="location-img" />

                                <div className="location-content">
                                    <h3 className="location-title">{location.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
