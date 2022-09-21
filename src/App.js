import NavBar from './components/NavBar.js';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/index.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />

      </Routes>
    </div>
  );
}

export default App;
