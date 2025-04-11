import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DataAnalystResources() {
  return (
    <Container className="my-4">
      <h2>Data Analyst Resources</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=r-uOLxNrNk8" target="_blank" rel="noreferrer">Excel for Data Analysis</a></li>
        <li><a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank" rel="noreferrer">SQL for Beginners</a></li>
        <li><a href="https://www.youtube.com/watch?v=Gp9JYq4tUqA" target="_blank" rel="noreferrer">Python for Data Analysis</a></li>
        <li><a href="https://www.youtube.com/watch?v=akxCz4DWU2w" target="_blank" rel="noreferrer">Power BI Full Tutorial</a></li>
      </ul>
      <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
    </Container>
  );
}

export default DataAnalystResources;
