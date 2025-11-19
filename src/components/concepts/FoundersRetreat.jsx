import React from 'react';
import { Compass, Users, Sun } from 'lucide-react';
import '../ConceptPage.css';

const FoundersRetreat = () => {
    return (
        <div className="concept-page retreat">
            <section className="concept-hero">
                <div className="retreat-background">
                    <div className="sunrise-gradient"></div>
                    <div className="mountain-layer mountain-back"></div>
                    <div className="mountain-layer mountain-mid"></div>
                    <div className="mountain-layer mountain-front"></div>
                    <div className="floating-light light-1"></div>
                    <div className="floating-light light-2"></div>
                    <div className="floating-light light-3"></div>
                </div>
                <div className="hero-content">
                    <div className="badge">Executive Leadership</div>
                    <h1>The Founder's Retreat</h1>
                    <p>Disruptive Leadership Guidance in Luxury Settings.</p>
                </div>
            </section>

            <section className="concept-details">
                <div className="details-container">
                    <h2>Disconnect to Reconnect</h2>
                    <p className="intro-text">
                        An exclusive, high-ticket retreat for non-tech CEOs.
                        Learn "Innovation/Disruption" curriculum while experiencing world-class hospitality.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <Compass size={32} className="icon" />
                            <h3>Disruptive Thinking</h3>
                            <p>Curriculum based on "The Undeniable" podcast and innovation frameworks.</p>
                        </div>
                        <div className="feature-card">
                            <Users size={32} className="icon" />
                            <h3>Peer Network</h3>
                            <p>Connect with a curated group of forward-thinking leaders.</p>
                        </div>
                        <div className="feature-card">
                            <Sun size={32} className="icon" />
                            <h3>Luxury Experience</h3>
                            <p>Hosted at exclusive properties with white-glove service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="concept-cta">
                <h2>Apply for the Next Retreat</h2>
                <button className="cta-button">View Itinerary</button>
            </section>
        </div>
    );
};

export default FoundersRetreat;
