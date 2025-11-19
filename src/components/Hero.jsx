import React from 'react';
import './Hero.css';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <Sparkles size={16} />
                    <span>Private Beta Access</span>
                </div>
                <h1>The Invisible Concierge</h1>
                <p className="hero-subtitle">AI-Driven Luxury Lifestyle Management for the Ultra-High-Net-Worth.</p>
                <button className="cta-button">Request Invitation</button>
            </div>
            <div className="hero-background">
                {/* Abstract luxury background element */}
                <div className="glow-orb"></div>
            </div>
        </section>
    );
};

export default Hero;
