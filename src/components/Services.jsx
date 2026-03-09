import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Services.css';

const servicesList = [
    {
        title: 'General Freight Service',
        description: 'Our General Freight Service is perfect for large or high-volume shipments that require the exclusive use of a truck. With direct delivery from pickup to destination and no shared loads or unnecessary stops, it ensures faster and more secure transport.',
        features: [
            'A fully integrated Transport Management System (TMS) to manage clients, carriers, and freight',
            'A rigorous carrier vetting process focused on safety and reliability',
            'A single point of contact for a wide range of transport solutions',
            'Nationwide coverage across all states, including cross-border shipping'
        ],
        footerText: 'For specific freight requirements, our team is here to help.',
        img: '/images/general.jpg', // Truck on road
        imageLeft: true
    },
    {
        title: 'Heavy Haulage Service',
        description: 'Our Heavy Haulage Service is built to transport oversized, over-dimensional, and heavy machinery or equipment safely and efficiently. We specialise in managing complex freight movements that require experience, precision, and compliance with regulatory requirements.',
        features: [
            'Specialised trailers and equipment for large loads',
            'Route planning and permit management',
            'Experienced operators and escort vehicles (if required)',
            'Safe and secure handling for all heavy freight'
        ],
        footerText: "Whether it's construction machinery, mining equipment, or large infrastructure components, we deliver heavy loads with confidence across Australia.",
        img: '/images/heavy.jpg', // Shipping containers
        imageLeft: false
    },
    {
        title: 'Interstate delivery service',
        description: "We specialise in efficient and reliable interstate freight across Australia. Whether you're shipping business goods or personal items, we ensure timely delivery with professional handling throughout the journey.",
        features: [
            'End-to-end logistics support with real-time tracking',
            'A trusted network of vetted carriers across all states',
            'Flexible delivery options tailored to your needs',
            'Seamless coordination from pickup to drop-off'
        ],
        footerText: 'Experience hassle-free interstate transport with a team committed to dependable service.',
        img: '/images/interstate.jpg', // Pallet jack
        imageLeft: true
    },
    {
        title: 'Intrastate Transportation',
        description: "We provide fast and reliable freight services within the same state, ensuring timely deliveries for businesses and individuals alike. Whether it's metro or regional, our intrastate solutions are designed for speed, flexibility, and efficiency.",
        features: [
            'Same-day or next-day delivery options (where available)',
            'Reliable carrier network for state-wide coverage',
            'Real-time tracking and updates',
            'Custom solutions to suit your delivery needs'
        ],
        footerText: 'Move goods confidently within your state with a team that prioritises punctuality and care.',
        img: '/images/intrastate.jpg', // Containers/Truck
        imageLeft: false
    }
];

const Services = () => {
    return (
        <section id="services" className="detailed-services-section section-padding">
            <div className="container">
                <motion.div
                    className="services-header-centered"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                >
                    <span className="kicker accent-text">Our Capabilities</span>
                    <h2 className="section-title">Services - <span className="text-gradient">Hume Freight</span></h2>
                </motion.div>

                <div className="services-list">
                    {servicesList.map((service, index) => (
                        <div key={index} className={`service-row ${service.imageLeft ? 'image-left' : 'image-right'}`}>

                            <motion.div
                                className="service-image-container"
                                initial={{ opacity: 0, x: service.imageLeft ? -50 : 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                            >
                                <img src={service.img} alt={service.title} className="service-featured-img" />
                            </motion.div>

                            <motion.div
                                className="service-text-content"
                                initial={{ opacity: 0, x: service.imageLeft ? 50 : -50, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
                            >
                                <h3 className="service-row-title">{service.title}</h3>
                                <p className="service-row-desc">{service.description}</p>

                                {service.features && service.features.length > 0 && (
                                    <ul className="service-feature-list">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={18} className="feature-check" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {service.footerText && (
                                    <p className="service-footer-text">{service.footerText}</p>
                                )}
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
