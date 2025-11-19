import React from 'react';
import { Building, Lock, Coins } from 'lucide-react';
import '../ConceptPage.css';

const TokenizedTier1 = () => {
    return (
        <div className="concept-page tokenized">
            <section className="concept-hero">
                <div className="hero-content">
                    <div className="badge">Web3 Real Estate</div>
                    <h1>Tokenized Tier-1</h1>
                    <p>Fractional Ownership of Trophy Hospitality Assets.</p>
                </div>
            </section>

            <section className="concept-details">
                <div className="details-container">
                    <h2>Democratizing Luxury Investment</h2>
                    <p className="intro-text">
                        Access "aspirational" real estate deals previously reserved for institutional capital.
                        Powered by blockchain for transparency and liquidity.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <Building size={32} className="icon" />
                            <h3>Trophy Assets</h3>
                            <p>Invest in single villas in Costa Rica or boutique hotels in prime locations.</p>
                        </div>
                        <div className="feature-card">
                            <Lock size={32} className="icon" />
                            <h3>Secure Ownership</h3>
                            <p>Legal ownership structure represented by digital tokens on the blockchain.</p>
                        </div>
                        <div className="feature-card">
                            <Coins size={32} className="icon" />
                            <h3>Liquidity</h3>
                            <p>Trade your fractional shares on our secondary market platform.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="concept-cta">
                <h2>Join the Waitlist</h2>
                <button className="cta-button">View Deal Flow</button>
            </section>
        </div>
    );
};

export default TokenizedTier1;
