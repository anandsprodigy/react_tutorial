import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet, Ghost} from 'react-kawaii';

function App() {
  return (
	<>
		<Planet size={220} mood="happy" color="#FCCB7E" />
		<Ghost size={240} mood="blissful" color="#E0E4E8" />
		
	</>
  );
}

export default App;
