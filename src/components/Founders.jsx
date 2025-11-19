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
                            <p>A powerhouse at the intersection of Big Tech and Luxury Real Estate. Ashley defines the high-touch service standards, leveraging deep consumer insights from Google and Peninsula Papagayo.</p>
                        </div>
                    </div>

                    <div className="founder-card">
                        <div className="founder-image-container">
                            <img src={devenImage} alt="Deven Spear" className="founder-image" />
                        </div>
                        <div className="founder-info">
                            <h3>Deven Spear</h3>
                            <span className="founder-role">Vision & Technology</span>
                            <p>A serial entrepreneur and visionary leader in PropTech and Web3. Deven brings the infrastructure to secure data and automate the complex logistics of luxury asset management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
