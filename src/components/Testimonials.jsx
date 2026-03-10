import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
    {
        id: 1,
        name: "Cameron M.",
        date: "15 days ago",
        initials: "CM",
        text: "Fast service. Great COMMUNICATION- so many freighters lack in this department, but not Hume Freight!! Thanks Guys, appreciate it."
    },
    {
        id: 2,
        name: "Russell M.",
        date: "12 days ago",
        initials: "RM",
        text: "Great price and lead-time, would be happy to use again. They stuck to the commitment, delivered on time and in good condition."
    },
    {
        id: 3,
        name: "Dino",
        date: "27 days ago",
        initials: "D",
        text: "Very reasonable price, picked up and delivered promptly. Definitely happy to use again."
    },
    {
        id: 4,
        name: "Consie P.",
        date: "2 months ago",
        initials: "CP",
        text: "Great work. Good turnaround on a short timeframe. Very cost effective."
    },
    {
        id: 5,
        name: "Adam B.",
        date: "2 months ago",
        initials: "AB",
        text: "Very efficient and easy to deal with. Highly recommend"
    }
];

// Combine the array with itself so it seamlessly loops
const INFINITE_REVIEWS = [...REVIEWS, ...REVIEWS];

const Testimonials = () => {
    return (
        <section className="testimonials-section section-padding" id="testimonials">
            <div className="container">
                <motion.div
                    className="testimonials-header-centered"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                >
                    <span className="kicker">Testimonials</span>
                    <h2 className="section-title">
                        5+ Years in Business, <span className="text-gradient">5000+ Happy Clients.</span>
                    </h2>
                </motion.div>

                <div className="testimonials-slider-container">
                    {/* The track animates to -50% to show all original cards, then instantly snaps back to 0% because the duplicates look exactly the same */}
                    <motion.div
                        className="testimonials-track"
                        animate={{
                            x: ['0%', '-50%']
                        }}
                        transition={{
                            ease: "linear",
                            duration: 35, // Smooth slow scrolling
                            repeat: Infinity
                        }}
                    >
                        {INFINITE_REVIEWS.map((review, index) => (
                            <div key={`${review.id}-${index}`} className="testimonial-card">
                                <div className="testimonial-header">
                                    <div className="testimonial-user">
                                        <div className="user-avatar">{review.initials}</div>
                                        <div className="user-info">
                                            <h4>{review.name}</h4>
                                            <span>{review.date}</span>
                                        </div>
                                    </div>
                                    {/* Simulating Google G icon */}
                                    <div className="google-logo">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            <path d="M1 1h22v22H1z" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="google-stars" style={{ display: 'flex', gap: '2px', marginLeft: '8px' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={16} fill="#fbbc04" color="#fbbc04" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 2px rgba(251, 188, 4, 0.4))' }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="testimonial-body">
                                    "{review.text}"
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
