import Navbar from "./Components/Navbar/Navbar";
import './App.css'; 
import React from 'react';

import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Projects2 from "./Components/Projects/Projects2";
import Contact from "./Components/Contact/Contact";
import Others from "./Components/Others/Others";
import Footer from "./Components/Footer/Footer";


function App() {

  return (
    
    <div id='home' className="App" >
    <Navbar/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Projects2/>
    <Others/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
