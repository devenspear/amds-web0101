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
                {/* AI-inspired geometric luxury background */}
                <div className="glow-orb"></div>
                <div className="geometric-grid"></div>
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
                <div className="luxury-gradient"></div>
            </div>
        </section>
    );
};

export default Hero;
