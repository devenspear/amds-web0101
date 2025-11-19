import React from 'react';
import './Concept.css';
import { Shield, Cpu, HeartHandshake } from 'lucide-react';

const Concept = () => {
    return (
        <section className="concept">
            <div className="concept-container">
                <div className="concept-header">
                    <h2>The Fractional Family Office</h2>
                    <p>Reimagining luxury lifestyle management through the lens of Generative AI.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <Cpu size={32} />
                        </div>
                        <h3>AI-Driven Logistics</h3>
                        <p>Our proprietary AI agent handles the "boring" logistics—maintenance schedules, travel bookings, and asset tracking—with zero latency and absolute precision.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <HeartHandshake size={32} />
                        </div>
                        <h3>High-Touch Hospitality</h3>
                        <p>Anticipatory service that knows what you need before you ask. We blend data-driven insights with the warmth of world-class hospitality.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <Shield size={32} />
                        </div>
                        <h3>Web3 Security</h3>
                        <p>Your data and asset records are secured by next-generation Web3 infrastructure, ensuring privacy, transparency, and immutability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept;
