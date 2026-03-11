import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="container nav-container">
                <a href="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                </a>

                <div className="desktop-menu">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#quote" className="nav-link">Contact Us</a>
                    <a href="#quote" className="btn btn-primary nav-btn">Request Quote</a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-links">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                    <a href="#quote" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                    <a href="#quote" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Request Quote</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
