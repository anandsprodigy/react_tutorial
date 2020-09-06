import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReadyComponent from './ReadyComponent';
import ReadyComponentGET from './ReadyComponentGET';

function App() {
  return (
    <>
    <div className="App">
      <ReadyComponent />
    </div>
    <div>
      <ReadyComponentGET />
    </div>
    </>
  );
}

export default App;
