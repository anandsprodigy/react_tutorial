import React from 'react';
import logo from './logo.svg';
import './App.css';
import Motherboard from './Motherboard.js';

function App() {
  return (
    <div className="App">
        <Motherboard manufacturer="Intel" core="2" RAM="4" type="ATX" slot="PCI-e"/>
        <Motherboard manufacturer="AMD" core="2" RAM="8" type="iTX" slot="PCI-e"/>
    </div>
  );
}

export default App;
