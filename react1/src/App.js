import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet, Ghost, Cat, CreditCard, Backpack} from 'react-kawaii';

function App() {
  return (
	<>
		<div className="cardContainer">
		<div className="card">
		<Planet size={220} mood="happy" color="#FCCB7E" className="animate__animated animate__swing" />
		</div>
		<div className="card">
		<Ghost size={240} mood="blissful" color="#E0E4E8" className="animate__animated animate__headShake"  />
		</div>
		<div className="card">
		<Cat size={320} mood="excited" color="#596881" className="animate__animated animate__wobble"  />
		</div>
		<div className="card">
		<CreditCard size={200} mood="sad" color="#83D1FB" className="animate__animated animate__pulse"  />
		</div>
		<div className="card">
		<Backpack size={320} mood="excited" color="#FFD882" className="animate__animated animate__bounce" />
		</div>
		</div>
	</>
  );
}

export default App;
