import NavBar from './components/NavBar.js';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/index.js';
import About from './pages/about.js';
import Work from './pages/work.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/work" element={ <Work/> } />
        <Route exact path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
