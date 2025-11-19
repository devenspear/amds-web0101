import React from 'react';
import './TheTest.css';
import { ArrowRight } from 'lucide-react';

const TheTest = () => {
    return (
        <section className="the-test">
            <div className="test-content">
                <h2>The Pilot Program</h2>
                <p>We are accepting 10 founding members for an exclusive beta. Experience the future of lifestyle management before the world does.</p>

                <div className="cta-form-container">
                    <input type="email" placeholder="Enter your email address" className="email-input" />
                    <button className="submit-button">
                        Request Access <ArrowRight size={18} />
                    </button>
                </div>

                <p className="disclaimer">By invitation only. Limited availability.</p>
            </div>
        </section>
    );
};

export default TheTest;
