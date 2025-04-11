import React from 'react';
import { Container } from 'react-bootstrap';

function GameDev() {
  return (
    <Container className="my-4">
      <h2>Game Development Roadmap</h2>
      <p>Game Developers use game engines like Unity or Unreal Engine, and programming languages like C# and C++ to build interactive games.</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=IlKaB1etrik" target="_blank" rel="noreferrer">Unity Beginner Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=1o5FMTHkLQg" target="_blank" rel="noreferrer">Unreal Engine 5 Beginner Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=5RHE2IQU-oE" target="_blank" rel="noreferrer">C# for Unity Game Development</a></li>
        <li><a href="https://www.youtube.com/watch?v=ThkBdRkYvDU" target="_blank" rel="noreferrer">Game Development Career Guide</a></li>
      </ul>
    </Container>
  );
}

export default GameDev;
