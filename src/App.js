import React, { useState } from "react";
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);

  };

  isDarkMode ? document.body.setAttribute("class", "dark") : document.body.setAttribute("class", "");

  return (
    <div className={isDarkMode ? "dark" : ''}>
      <Header mode={toggleDarkMode} is={isDarkMode} />
      <main className="main">

        <Home is={isDarkMode} />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
