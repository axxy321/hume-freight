import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnoAI from './ui/animated-shader-background';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <AnoAI />
            </div>
            <div className="hero-background relative z-10 pointer-events-none">
                <div className="gradient-overlay opacity-80"></div>

                {/* Sexy Animated Truck Layer */}
                <motion.div
                    className="hero-animated-truck-wrapper"
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                >
                    <motion.img
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2670&auto=format&fit=crop"
                        alt="Premium Freight Truck"
                        className="hero-truck-img"
                        animate={{
                            x: [0, -40],
                            scale: [1, 1.05]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.span
                        className="kicker text-gradient"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        WE ARE LOGISTICS
                    </motion.span>
                    <h1 className="hero-title">
                        Direct Access to <br />
                        <span className="accent-text">Premium Freight</span>
                    </h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Hume Freight is a premier logistics operator delivering tailored
                        road, air, and sea freight solutions across Australia and the globe.
                        From commercial enterprises to sensitive specialized cargo,
                        our clients trust us to deliver on time, every time.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href="#services" className="btn btn-primary group">
                            Explore Services
                            <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                        </a>
                        <a href="#quote" className="btn btn-outline">
                            Request a Quote
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-stats glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="stat">
                        <span className="stat-value">24/7</span>
                        <span className="stat-label">Availability</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-value text-gradient">100%</span>
                        <span className="stat-label">Coverage</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-value">Speed</span>
                        <span className="stat-label">& Precision</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
