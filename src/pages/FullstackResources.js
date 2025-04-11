import React from 'react';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function FullstackResources() {
  return (
    <Container className="my-4">
      <h2>Fullstack Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=fgTGADljAeg" target="_blank" rel="noreferrer">Fullstack Web Dev Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=ENrzD9HAZK4" target="_blank" rel="noreferrer">MERN Stack Overview</a></li>
        <li><a href="https://www.youtube.com/watch?v=4F2m91eKmts" target="_blank" rel="noreferrer">JWT & Authentication</a></li>
        <li><a href="https://www.youtube.com/watch?v=B-s72JrWcJM" target="_blank" rel="noreferrer">Deploy Fullstack Projects</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default FullstackResources;
