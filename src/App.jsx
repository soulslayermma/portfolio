import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';
import './assets/styles/main.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Resume />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;