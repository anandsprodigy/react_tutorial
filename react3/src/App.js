import React from 'react';
import logo from './logo.svg';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
		<h1>Hello, World</h1>
		<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
