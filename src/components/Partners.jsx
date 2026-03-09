import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

// We simulate high-end enterprise partners using robust SVGs to ensure crisp, premium presentation.
// These emulate the look and feel of "Teletrac", "Mass Management", etc.
const PARTNERS = [
    {
        id: 'transvirtual',
        name: 'Transvirtual',
        image: '/images/partners/5-1.jpg'
    },
    {
        id: 'guardian',
        name: 'Seeing Machines Guardian',
        image: '/images/partners/2-3.jpg'
    },
    {
        id: 'cor',
        name: 'Chain of Responsibility',
        image: '/images/partners/3-4.jpg'
    },
    {
        id: 'teletrac',
        name: 'Teletrac Navman',
        image: '/images/partners/6-1.jpg'
    },
    {
        id: 'mass',
        name: 'Mass Management',
        image: '/images/partners/4-3.jpg'
    },
    {
        id: 'gearbox',
        name: 'Gearbox',
        image: '/images/partners/7-1.jpg'
    }
];

// Combine the array heavily so the infinite loop handles fast movement gracefully without ever tearing
const INFINITE_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

const Partners = () => {
    return (
        <section className="partners-section" id="partners">
            <div className="container">
                <motion.div
                    className="partners-header-centered"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                >
                    <h2 className="section-title">
                        Our Trusted Partners
                    </h2>
                </motion.div>

                <div className="partners-slider-container">
                    <motion.div
                        className="partners-track"
                        animate={{
                            x: ['0%', '-50%']
                        }}
                        transition={{
                            ease: "linear",
                            duration: 30, // Extremely smooth sliding pan
                            repeat: Infinity
                        }}
                    >
                        {INFINITE_PARTNERS.map((partner, index) => (
                            <div key={`${partner.id}-${index}`} className="partner-logo-card">
                                <img src={partner.image} alt={partner.name} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
