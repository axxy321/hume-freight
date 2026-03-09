import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

// We simulate high-end enterprise partners using robust SVGs to ensure crisp, premium presentation.
// These emulate the look and feel of "Teletrac", "Mass Management", etc.
const PARTNERS = [
    {
        id: 'nav',
        name: 'Navman Solutions',
        svg: (
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M20 30 L40 10 L60 30 L40 50 Z" fill="#65A30D" />
                <circle cx="40" cy="30" r="8" fill="#ffffff" />
                <text x="75" y="38" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" fill="#1F2937">Teletrac</text>
            </svg>
        )
    },
    {
        id: 'mass',
        name: 'Mass Management',
        svg: (
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect x="10" y="20" width="15" height="20" fill="#16A34A" />
                <rect x="30" y="10" width="15" height="30" fill="#16A34A" />
                <rect x="50" y="25" width="15" height="15" fill="#16A34A" />
                <text x="75" y="38" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#84CC16">mass<tspan fill="#374151"> management</tspan></text>
            </svg>
        )
    },
    {
        id: 'gearbox',
        name: 'Gearbox',
        svg: (
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <circle cx="35" cy="30" r="18" fill="none" stroke="#2563EB" strokeWidth="6" />
                <circle cx="35" cy="30" r="8" fill="#F43F5E" />
                <path d="M35 5 L35 15 M35 45 L35 55 M10 30 L20 30 M50 30 L60 30" stroke="#0F172A" strokeWidth="4" />
                <text x="70" y="38" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="800" fill="#0F172A">Gearbox</text>
            </svg>
        )
    },
    {
        id: 'transvirtual',
        name: 'Transvirtual',
        svg: (
            <svg viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect x="15" y="15" width="30" height="30" rx="6" fill="#1E3A8A" />
                <path d="M25 30 L35 20 L35 40 Z" fill="#ffffff" />
                <text x="55" y="38" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="600" fill="#1E3A8A">Transvirtual</text>
            </svg>
        )
    },
    {
        id: 'guardian',
        name: 'Seeing Machines Guardian',
        svg: (
            <svg viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M20 30 Q35 15 50 30 Q35 45 20 30 Z" fill="none" stroke="#0EA5E9" strokeWidth="4" />
                <circle cx="35" cy="30" r="5" fill="#0EA5E9" />
                <text x="65" y="36" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="500" fill="#4B5563">seeing machines <tspan fontWeight="800" fill="#111827">GUARDIAN</tspan></text>
            </svg>
        )
    },
    {
        id: 'cor',
        name: 'Chain of Responsibility',
        svg: (
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <circle cx="35" cy="30" r="20" fill="none" stroke="#EA580C" strokeWidth="4" strokeDasharray="6 4" />
                <text x="25" y="36" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="800" fill="#EA580C">CoR</text>
                <text x="70" y="35" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#4B5563">Chain of <tspan x="70" y="52" fontSize="14" fill="#6B7280">Responsibility</tspan></text>
            </svg>
        )
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
                                {partner.svg}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
