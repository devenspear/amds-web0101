import React from 'react';
import Founders from './Founders';
import './Home.css';

const Home = ({ setCurrentView }) => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="home-hero-content">
                    <h1>The Venture Lab</h1>
                    <p className="subtitle">Deven Spear & Ashley Mohan</p>
                    <p className="description">
                        Merging Visionary Tech with Luxury Experience.
                        We are testing the future of high-end living, PropTech, and digital transformation.
                    </p>
                    <button className="explore-button" onClick={() => setCurrentView('invisible-concierge')}>
                        Explore Concepts
                    </button>
                </div>
            </section>
            <Founders />
        </div>
    );
};

export default Home;
