import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "What types of freight services do you offer?",
        answer: "A variety of options are offered, including road freight, air cargo, sea freight, and express courier services for both domestic and international shipping."
    },
    {
        question: "Do you provide door-to-door delivery?",
        answer: "Yes, complete door-to-door delivery is available, ensuring convenience and seamless service from pickup to final destination."
    },
    {
        question: "Can I track my shipment in real-time?",
        answer: "Absolutely. A tracking system is in place that allows monitoring of shipments in real time for added transparency and peace of mind."
    },
    {
        question: "How are shipping rates calculated?",
        answer: "Shipping rates are calculated based on factors such as package weight, dimensions, destination, delivery speed, and service type."
    },
    {
        question: "Do you handle delicate or high-value goods?",
        answer: "Yes, extra care and specialised handling procedures are applied to ensure the safe transport of delicate or high-value goods."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="faq-section section-padding">
            <div className="container">
                <div className="faq-grid">
                    <motion.div
                        className="faq-header"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <span className="kicker">Knowledge Base</span>
                        <h2 className="section-title">
                            Common <span className="accent-text">Inquiries</span>
                        </h2>
                        <p className="faq-desc">
                            Helpful insight at your fingertips. If you have additional questions, our global support team is available 24/7.
                        </p>
                        <a href="#quote" className="btn btn-outline" style={{ marginTop: '30px' }}>
                            Contact Support
                        </a>
                    </motion.div>

                    <motion.div
                        className="faq-list"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <button className="faq-toggle">
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </button>
                                </div>
                                <div
                                    className="faq-answer-wrapper"
                                    style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                                >
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
