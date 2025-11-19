import React from 'react';
import { Rocket, TrendingUp, Users } from 'lucide-react';
import '../ConceptPage.css'; // Shared styles

const PropelX = () => {
    return (
        <div className="concept-page propel-x">
            <section className="concept-hero">
                <div className="hero-content">
                    <div className="badge">PropTech Accelerator</div>
                    <h1>Propel-X</h1>
                    <p>The GTM Engine for Series A PropTech.</p>
                </div>
            </section>

            <section className="concept-details">
                <div className="details-container">
                    <h2>Scale Your Sales & Marketing</h2>
                    <p className="intro-text">
                        We bridge the gap between product-market fit and scalable growth.
                        Deven refines the product vision, while Ashley rebuilds the sales engine.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <Rocket size={32} className="icon" />
                            <h3>Growth Sprint</h3>
                            <p>A 3-month intensive overhaul of your go-to-market strategy.</p>
                        </div>
                        <div className="feature-card">
                            <TrendingUp size={32} className="icon" />
                            <h3>Sales Ops</h3>
                            <p>Implement Google-tier sales operations and programmatic ad strategies.</p>
                        </div>
                        <div className="feature-card">
                            <Users size={32} className="icon" />
                            <h3>Founder Coaching</h3>
                            <p>Direct mentorship from founders who have exited in the space.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="concept-cta">
                <h2>Ready to Scale?</h2>
                <button className="cta-button">Apply for Batch 1</button>
            </section>
        </div>
    );
};

export default PropelX;
