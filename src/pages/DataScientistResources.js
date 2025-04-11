import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DataScientistResources() {
  return (
    <Container className="my-4">
      <h2>Data Scientist Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=ua-CiDNNj30" target="_blank" rel="noreferrer">Intro to Data Science</a></li>
        <li><a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw" target="_blank" rel="noreferrer">Machine Learning by Andrew Ng</a></li>
        <li><a href="https://www.youtube.com/watch?v=9ylj9NR0Lcg" target="_blank" rel="noreferrer">Pandas for Data Science</a></li>
        <li><a href="https://www.youtube.com/watch?v=xC-c7E5PK0Y" target="_blank" rel="noreferrer">Data Science Portfolio Project</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default DataScientistResources;
