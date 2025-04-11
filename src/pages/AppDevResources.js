import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppDevResources() {
  return (
    <Container className="my-4">
      <h2>App Development Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=BBWyXo-3JGQ" target="_blank" rel="noreferrer">Android Development (Java)</a></li>
        <li><a href="https://www.youtube.com/watch?v=VPvVD8t02U8" target="_blank" rel="noreferrer">Flutter Full Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noreferrer">React Native Basics</a></li>
        <li><a href="https://www.youtube.com/watch?v=Fnc_Jz5tC3I" target="_blank" rel="noreferrer">Publishing to Play Store</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default AppDevResources;
