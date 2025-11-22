import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import InvisibleConcierge from './components/concepts/InvisibleConcierge';
import PropelX from './components/concepts/PropelX';
import TokenizedTier1 from './components/concepts/TokenizedTier1';
import MicroMoment from './components/concepts/MicroMoment';
import FoundersRetreat from './components/concepts/FoundersRetreat';
import PasswordGate from './components/PasswordGate';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('amds-unlocked') === 'true';
  });

  const handleUnlock = () => {
    localStorage.setItem('amds-unlocked', 'true');
    setIsUnlocked(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setCurrentView={setCurrentView} />;
      case 'invisible-concierge': return <InvisibleConcierge />;
      case 'propel-x': return <PropelX />;
      case 'tokenized-tier-1': return <TokenizedTier1 />;
      case 'micro-moment': return <MicroMoment />;
      case 'founders-retreat': return <FoundersRetreat />;
      default: return <Home setCurrentView={setCurrentView} />;
    }
  };

  if (!isUnlocked) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  return (
    <div className="app">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;
