import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GameDevResources() {
  return (
    <Container className="my-4">
      <h2>Game Development Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=IlKaB1etrik" target="_blank" rel="noreferrer">Unity for Beginners</a></li>
        <li><a href="https://www.youtube.com/watch?v=1o5FMTHkLQg" target="_blank" rel="noreferrer">Unreal Engine 5 Intro</a></li>
        <li><a href="https://www.youtube.com/watch?v=5RHE2IQU-oE" target="_blank" rel="noreferrer">C# for Game Dev</a></li>
        <li><a href="https://www.youtube.com/watch?v=ThkBdRkYvDU" target="_blank" rel="noreferrer">How to Become a Game Dev</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default GameDevResources;

