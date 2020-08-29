import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet, Ghost, Cat, CreditCard, Backpack} from 'react-kawaii';

function App() {
  return (
	<>
		<Planet size={220} mood="happy" color="#FCCB7E" />
		<Ghost size={240} mood="blissful" color="#E0E4E8" />
		<Cat size={320} mood="excited" color="#596881" />
		<CreditCard size={200} mood="sad" color="#83D1FB" />
		<Backpack size={320} mood="excited" color="#FFD882" />
	</>
  );
}

export default App;
