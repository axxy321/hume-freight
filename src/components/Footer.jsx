import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <a href="/" className="mb-20" style={{ display: 'inline-block', textDecoration: 'none' }}>
                            <Logo />
                        </a>
                        <p className="footer-bio">
                            Premium logistics solutions connecting Australia and the world. Moving what matters, when it matters.
                        </p>
                        <div className="social-links mt-30">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#services">Air Cargo</a></li>
                            <li><a href="#services">Sea Freight</a></li>
                            <li><a href="#services">Road Transport</a></li>
                            <li><a href="#services">Express Courier</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#locations">Locations</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-contact"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <h4 className="footer-heading">Get an Instant Quote</h4>
                        <p className="mb-20">Contact our operations center for immediate assistance.</p>
                        <a href="#quote" className="btn btn-primary" style={{ display: 'inline-block', marginBottom: '20px', padding: '10px 20px', fontSize: '0.9rem' }}>
                            Request Quote
                        </a>
                        <br />
                        <a href="mailto:admin@humefreight.com.au" className="contact-link text-gradient-light">
                            admin@humefreight.com.au
                        </a>
                        <div className="hotline mt-20">
                            <span className="kicker accent-text">24/7 Hotline</span>
                            <p className="footer-phone">+61 482 086 541</p>
                        </div>
                    </motion.div>

                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Hume Freight. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
