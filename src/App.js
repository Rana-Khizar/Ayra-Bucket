import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Stores from './components/Stores';
import Team from './components/Team';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return <Home setCurrentSection={setCurrentSection} />;
      case 'stores':
        return <Stores />;
       case 'team':
         return <Team />;
       case 'about':
          return <About />;
      default:
        return <Home setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="app">
      <Header 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;