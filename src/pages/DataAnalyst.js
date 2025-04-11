import React from 'react';
import { Container } from 'react-bootstrap';

function DataAnalyst() {
  return (
    <Container className="my-4">
      <h2>Data Analyst Roadmap</h2>
      <p>Data Analysts use tools like Excel, SQL, Power BI, and Python for data-driven decision making.</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=r-uOLxNrNk8" target="_blank" rel="noreferrer">Excel for Data Analysis</a></li>
        <li><a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank" rel="noreferrer">SQL for Beginners</a></li>
        <li><a href="https://www.youtube.com/watch?v=akxCz4DWU2w" target="_blank" rel="noreferrer">Power BI Full Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=Gp9JYq4tUqA" target="_blank" rel="noreferrer">Python for Data Analysis</a></li>
      </ul>
    </Container>
  );
}

export default DataAnalyst;
