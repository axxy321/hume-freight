import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import emailjs from '@emailjs/browser';
import './QuoteSection.css';

const QuoteSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            // 1. Save to Supabase database
            const { error } = await supabase
                .from('quotes')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        location: formData.location,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            // 2. Send auto-reply email to customer via EmailJS
            try {
                const emailResult = await emailjs.send(
                    'service_7fg1tba',
                    'template_z5ovzdl',
                    {
                        to_email: formData.email,
                        from_name: 'Hume Freight',
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        location: formData.location,
                        message: formData.message,
                    },
                    'RCxWATwZqmB2EtO0N'
                );
                console.log('EmailJS success:', emailResult);
            } catch (emailError) {
                console.error('EmailJS auto-reply failed:', emailError);
                alert('Email notification failed: ' + (emailError?.text || JSON.stringify(emailError)));
            }

            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', location: '', message: '' });

            // Reset submission state after a few seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error("Error submitting quote:", error);
            setErrorMsg('Failed to submit request. Please try again later.');
        }
    };

    return (
        <section id="quote" className="quote-section section-padding">
            <div className="container">
                <div className="quote-grid">

                    {/* Left Side: Contact Details */}
                    <motion.div
                        className="contact-details"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <div className="contact-header">
                            <span className="kicker">HUME FREIGHT</span>
                            <h2 className="section-title">Contact <span className="accent-text">Detail</span></h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="contact-info-list">
                            <div className="contact-item">
                                <div className="contact-icon glass-panel">
                                    <Phone size={24} className="accent-text" />
                                </div>
                                <div className="contact-card">
                                    <h4>Call Us Instead</h4>
                                    <p>1800 497 107</p>
                                    <span>Available 24/7 for urgent freight</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon glass-panel">
                                    <Mail size={24} className="accent-text" />
                                </div>
                                <div className="contact-text">
                                    <h3>Email :</h3>
                                    <p>sales@humefreight.com.au</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon glass-panel">
                                    <MapPin size={24} className="accent-text" />
                                </div>
                                <div className="contact-text">
                                    <h3>Our Locations :</h3>
                                    <p>Servicing all over Australia & Globally</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon glass-panel">
                                    <Clock size={24} className="accent-text" />
                                </div>
                                <div className="contact-text">
                                    <h3>Working Hours :</h3>
                                    <p>24/7 Operations Center Support</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Quote Form */}
                    <motion.div
                        className="quote-form-wrapper glass-panel"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <h2 className="form-title">Get A Free Quote</h2>

                        {submitted ? (
                            <div className="success-message">
                                <h3>Request Received</h3>
                                <p>Our operations team will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="quote-form">
                                {errorMsg && <div className="error-message" style={{ color: '#eb2027', marginBottom: '15px' }}>{errorMsg}</div>}
                                <div className="form-group full-width">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your phone number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+61 ..."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Your email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label>Your Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        placeholder="Pickup / Dropoff City"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us about your freight requirements..."
                                        rows="4"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    Submit Request
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
