import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand animate-on-scroll">
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
                    </div>

                    <div className="footer-links animate-on-scroll delay-100">
                        <h4 className="footer-heading">Services</h4>
                        <ul>
                            <li><a href="#">Air Cargo</a></li>
                            <li><a href="#">Sea Freight</a></li>
                            <li><a href="#">Road Transport</a></li>
                            <li><a href="#">Express Courier</a></li>
                        </ul>
                    </div>

                    <div className="footer-links animate-on-scroll delay-200">
                        <h4 className="footer-heading">Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Fleet</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact animate-on-scroll delay-300">
                        <h4 className="footer-heading">Get an Instant Quote</h4>
                        <p className="mb-20">Contact our operations center for immediate assistance.</p>
                        <a href="mailto:operations@humefreight.com.au" className="contact-link text-gradient-light">
                            operations@humefreight.com.au
                        </a>
                        <div className="hotline mt-20">
                            <span className="kicker accent-text">24/7 Hotline</span>
                            <p className="footer-phone">+61 1300 123 456</p>
                        </div>
                    </div>

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
