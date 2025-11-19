import React from 'react';
import './Founders.css';
import ashleyImage from '../assets/ashley-mohan.png';
import devenImage from '../assets/deven-spear.png';

const Founders = () => {
    return (
        <section className="founders">
            <div className="founders-container">
                <div className="section-label">The Visionaries</div>
                <h2>Architects of the Invisible</h2>

                <div className="founders-grid">
                    <div className="founder-card">
                        <div className="founder-image-container">
                            <img src={ashleyImage} alt="Ashley Mohan" className="founder-image" />
                        </div>
                        <div className="founder-info">
                            <h3>Ashley Mohan</h3>
                            <span className="founder-role">Luxury & Experience</span>
                            <p>A strategist and luxury-market operator known for translating complex vision into crisp, high-impact execution. With more than a decade inside Google, she honed an uncommon blend of analytical depth and hospitality-grade experience design—expertise she now brings to luxury real estate, placemaking, and brand transformation. She led a $750M global portfolio as Head of Industry for Google Ads, advising Fortune 500 leaders across Travel, Retail, and Tech on unlocking next-level digital performance. Earlier in her career, she helped develop a $2B ultra-luxury hospitality portfolio, including marquee resort destinations and flagship branded residences.</p>
                        </div>
                    </div>

                    <div className="founder-card">
                        <div className="founder-image-container">
                            <img src={devenImage} alt="Deven Spear" className="founder-image" />
                        </div>
                        <div className="founder-info">
                            <h3>Deven Spear</h3>
                            <span className="founder-role">Vision & Technology</span>
                            <p>A multidisciplinary futurist and serial founder operating at the intersection of real estate, wellness, AI, and Web3. He translates frontier technologies into practical, elegant systems that elevate how people live, invest, and experience place. A veteran of venture-backed SaaS and next-gen PropTech, he designs intelligent architectures that secure data, streamline operations, and unlock new economic models. His work blends timeless design intuition with cutting-edge computation, creating pathways for developers and brands ready to build the future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
