import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BackendResources() {
  return (
    <Container className="my-4">
      <h2>Backend Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=Oe421EPjeBE" target="_blank" rel="noreferrer">Node.js Crash Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=L72fhGm1tfE" target="_blank" rel="noreferrer">Express.js Beginner Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=9ylj9NR0Lcg" target="_blank" rel="noreferrer">MySQL Full Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=U9T6YkEDkMo" target="_blank" rel="noreferrer">REST API Explained</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default BackendResources;
