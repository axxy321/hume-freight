import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video-bg"
                >
                    <source src="/images/hero-truck-video-loop.mp4" type="video/mp4" />
                </video>
                <div className="gradient-overlay"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.span
                        className="kicker"
                        style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '5px' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        WE ARE LOGISTICS
                    </motion.span>
                    <h1 className="hero-title">
                        Direct Access to <br />
                        <span style={{ fontWeight: 700, color: '#ffffff' }}>Premium Freight</span>
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
                        <span className="stat-value">100%</span>
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
