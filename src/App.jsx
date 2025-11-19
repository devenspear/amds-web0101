import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import InvisibleConcierge from './components/concepts/InvisibleConcierge';
import PropelX from './components/concepts/PropelX';
import TokenizedTier1 from './components/concepts/TokenizedTier1';
import MicroMoment from './components/concepts/MicroMoment';
import FoundersRetreat from './components/concepts/FoundersRetreat';

function App() {
  const [currentView, setCurrentView] = useState('home');

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

  return (
    <div className="app">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
}

export default App;
