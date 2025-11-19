import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Venture Lab' },
        { id: 'invisible-concierge', label: 'Invisible Concierge' },
        { id: 'propel-x', label: 'Propel-X' },
        { id: 'tokenized-tier-1', label: 'Tokenized Tier-1' },
        { id: 'micro-moment', label: 'Micro-Moment' },
        { id: 'founders-retreat', label: 'Founder\'s Retreat' },
    ];

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => setCurrentView('home')}>
                    AM & DS
                </div>

                <div className="desktop-menu">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-link ${currentView === item.id ? 'active' : ''}`}
                            onClick={() => setCurrentView(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`mobile-nav-link ${currentView === item.id ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentView(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
