import React from 'react';
import { Target, Zap, BarChart } from 'lucide-react';
import '../ConceptPage.css';

const MicroMoment = () => {
    return (
        <div className="concept-page micro-moment">
            <section className="concept-hero">
                <div className="hero-content">
                    <div className="badge">Luxury Marketing</div>
                    <h1>Micro-Moment Agency</h1>
                    <p>Precision Marketing for Life's Pivotal Shifts.</p>
                </div>
            </section>

            <section className="concept-details">
                <div className="details-container">
                    <h2>Beyond "Pretty Pictures"</h2>
                    <p className="intro-text">
                        We target luxury buyers during specific life shifts—divorce, IPO, inheritance.
                        Data-driven campaigns that meet them in the moment.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <Target size={32} className="icon" />
                            <h3>Precision Targeting</h3>
                            <p>Identify high-intent buyers based on real-time behavioral signals.</p>
                        </div>
                        <div className="feature-card">
                            <Zap size={32} className="icon" />
                            <h3>Dynamic Creative</h3>
                            <p>Personalized messaging that speaks directly to the buyer's current context.</p>
                        </div>
                        <div className="feature-card">
                            <BarChart size={32} className="icon" />
                            <h3>ROI Focus</h3>
                            <p>Minimize wasted ad spend with Google-tier analytics and optimization.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="concept-cta">
                <h2>Audit Your Strategy</h2>
                <button className="cta-button">Book Consultation</button>
            </section>
        </div>
    );
};

export default MicroMoment;
