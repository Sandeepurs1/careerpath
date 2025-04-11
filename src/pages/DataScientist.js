import React from 'react';
import { Container } from 'react-bootstrap';

function DataScientist() {
  return (
    <Container className="my-4">
      <h2>Data Scientist Roadmap</h2>
      <p>Data Scientists work with machine learning, data processing, and visualization tools.</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=ua-CiDNNj30" target="_blank" rel="noreferrer">Intro to Data Science</a></li>
        <li><a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw" target="_blank" rel="noreferrer">Machine Learning by Andrew Ng</a></li>
        <li><a href="https://www.youtube.com/watch?v=9ylj9NR0Lcg" target="_blank" rel="noreferrer">Data Analysis with Python</a></li>
        <li><a href="https://www.youtube.com/watch?v=xC-c7E5PK0Y" target="_blank" rel="noreferrer">Data Science Project Example</a></li>
      </ul>
    </Container>
  );
}

export default DataScientist;
