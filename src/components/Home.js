import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import frontendImg from '../assets/frontend.jpeg';
import backendImg from '../assets/backend.jpeg';
import fullstackImg from '../assets/fullstack.jpeg';
import dataAnalystImg from '../assets/data analyst.jpeg';
import dataScientistImg from '../assets/data scientist.jpeg';
import appDevImg from '../assets/app dev.jpeg';
import gameDevImg from '../assets/game dev.jpeg';

const domains = [
  { title: 'Frontend', path: '/frontend', img: frontendImg },
  { title: 'Backend', path: '/backend', img: backendImg },
  { title: 'Fullstack', path: '/fullstack', img: fullstackImg },
  { title: 'Data Analyst', path: '/data-analyst', img: dataAnalystImg },
  { title: 'Data Scientist', path: '/data-scientist', img: dataScientistImg },
  { title: 'App Development', path: '/app-dev', img: appDevImg },
  { title: 'Game Development', path: '/game-dev', img: gameDevImg },
];

function Home() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Tech Career Roadmaps</h2>

      {!user && (
        <div className="text-center mb-4">
          <Link to="/login">
            <Button variant="primary" className="me-2">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-secondary">Sign Up</Button>
          </Link>
        </div>
      )}

      <Row>
        {domains.map((domain, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={domain.img}
                height="200px"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center mb-3">{domain.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Link to={domain.path}>
                    <Button variant="primary">Roadmap</Button>
                  </Link>
                  <Link to={`${domain.path}/resources`}>
                    <Button variant="outline-secondary">Resources</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;





