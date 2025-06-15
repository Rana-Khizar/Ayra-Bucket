import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Stores from './components/Stores/Stores';
import Team from './components/Team/Team';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
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