import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="kicker accent-text">The Hume Freight Heritage</span>
                        <h2 className="section-title">
                            Precision & <span className="text-gradient">Excellence</span>
                        </h2>
                        <p className="about-text">
                            Each detail of your consignment — from route planning to final delivery — reflects our dedication to perfection. Our fleet and crew meet the highest global standards, ensuring reliability in every mission across Australia.
                        </p>
                        <p className="about-text text-secondary">
                            Whether you're shipping fragile items, high-value goods, or massive commercial loads via road train, Hume Freight gives you the freedom to continue operations without compromise.
                        </p>

                        <div className="features-list">
                            <motion.div
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <ShieldCheck className="accent-text" size={24} />
                                <span>Specialized Handling for High-Value Goods</span>
                            </motion.div>
                            <motion.div
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <MapPin className="accent-text" size={24} />
                                <span>Authentic Door-to-Door Delivery</span>
                            </motion.div>
                            <motion.div
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Clock className="accent-text" size={24} />
                                <span>Optimized Routes & Time-Critical Deliveries</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className="about-cta glass-panel mt-40"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="cta-text">
                                <h4 className="cta-title">Need custom logistics?</h4>
                                <p>Contact our dedicated 24/7 team.</p>
                            </div>
                            <a href="#quote" className="btn btn-outline">Consult Expert</a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="image-stack">
                            <img
                                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2670&auto=format&fit=crop"
                                alt="Australian Road Train"
                                className="stack-img main-img"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop"
                                alt="High value freight"
                                className="stack-img overlay-img glass-panel"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
