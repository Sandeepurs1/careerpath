import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FrontendResources() {
  return (
    <Container className="my-4">
      <h2>Frontend Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target="_blank" rel="noreferrer">HTML Crash Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" target="_blank" rel="noreferrer">CSS Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target="_blank" rel="noreferrer">JavaScript Basics</a></li>
        <li><a href="https://www.youtube.com/watch?v=bMknfKXIFA8" target="_blank" rel="noreferrer">React.js Beginner Guide</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default FrontendResources;
