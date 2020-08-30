import React from 'react';
import logo from './logo.svg';
import './App.css';
import Motherboard from './Motherboard.js';

function App() {
  return (
    <div className="App">
        <Motherboard manufacturer="Intel" core="2" RAM="4" />
    </div>
  );
}

export default App;
