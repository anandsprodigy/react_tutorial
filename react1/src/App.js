import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet, Ghost, Cat, CreditCard, Backpack} from 'react-kawaii';

function App() {
  return (
	<>
		<div className="card">
		<Planet size={220} mood="happy" color="#FCCB7E" />
		</div>
		<div className="card">
		<Ghost size={240} mood="blissful" color="#E0E4E8" />
		</div>
		<div className="card">
		<Cat size={320} mood="excited" color="#596881" />
		
		<div className="card">
		<CreditCard size={200} mood="sad" color="#83D1FB" />
		</div>
		<div className="card">
		<Backpack size={320} mood="excited" color="#FFD882" />
		</div>
	</>
  );
}

export default App;
