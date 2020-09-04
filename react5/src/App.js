import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {  Card, Button, ListGroup}  from 'react-bootstrap';

function App() {
    return ( 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png" />
        <Card.Body>
          <Card.Title className="text-center">AMD-YFT-001</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">AMD RYZEN 3 3100</ListGroup.Item>
            <ListGroup.Item className="text-center">ASRock 450M Pro4</ListGroup.Item>
            <ListGroup.Item className="text-center">Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item className="text-center">8 GB DDR4 RAM</ListGroup.Item>
            <ListGroup.Item className="text-center">1 TB HDD</ListGroup.Item>
            <ListGroup.Item className="text-center">NVIDIA GeForce GTX 1050 Ti </ListGroup.Item>
            <ListGroup.Item className="text-center">Cooler Master Case</ListGroup.Item>
            <ListGroup.Item className="text-center">Windows 10 Home 64-bit</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default App;