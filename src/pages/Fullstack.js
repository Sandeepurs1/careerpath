import React from 'react';
import { Container } from 'react-bootstrap';

function Fullstack() {
  return (
    <Container className="my-4">
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>FULL STACK DEVELOPMENT ROADMAP</h2>

      <img
  src="https://softprodigy.com/storage/2023/06/full-stack-devlopment.jpg"
  alt="Backend"
  style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '20px auto' }}
/>
      <p>What is Full Stack Development?

Full stack development means working on both the frontend and the backend of a web application. A full stack developer builds the complete web experience — from designing the user interface to managing the server, database, and application logic.

You don’t just build what users see (frontend), but also what they don’t (backend and database). This makes full stack developers highly valuable and versatile.

Skills Required for Full Stack Development

To become a full stack developer, you need to be comfortable with both client-side and server-side technologies.

Frontend (Client Side)

HTML – Structure of web pages

CSS – Styling, layout, responsiveness

JavaScript – Interactivity and dynamic behavior

Frameworks like React, Angular, or Vue

UI libraries like Bootstrap or Tailwind CSS

Responsive Design and Browser Compatibility

Backend (Server Side)

Programming languages like JavaScript (Node.js), Python, Java, PHP, or Ruby

Frameworks like Express.js (Node), Django (Python), Spring Boot (Java), Laravel (PHP)

Building APIs and handling HTTP requests

Authentication and Authorization

Working with servers and handling logic

Database Management

SQL databases: MySQL, PostgreSQL

NoSQL databases: MongoDB, Firebase

CRUD operations (Create, Read, Update, Delete)

Connecting database to backend

Version Control and Collaboration

Git and GitHub for tracking changes

Creating branches, pull requests, and merging code

Working in a team environment

Deployment and DevOps Basics

Hosting full stack apps on platforms like Vercel, Netlify, Heroku, or Render

Using CI/CD pipelines for deployment automation

Environment variables and server configuration

Tools and Technologies to Learn

Git, GitHub

VS Code

Postman (API testing)

Docker (optional for deployment)

REST APIs and optionally GraphQL

MVC architecture

Popular Full Stack Stacks

MERN Stack: MongoDB, Express.js, React, Node.js

MEAN Stack: MongoDB, Express.js, Angular, Node.js

LAMP Stack: Linux, Apache, MySQL, PHP

Django + React or Flask + Vue

Java Spring Boot + React</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=fgTGADljAeg" target="_blank" rel="noreferrer">Fullstack Web Dev Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=ENrzD9HAZK4" target="_blank" rel="noreferrer">MERN Stack Crash Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=4F2m91eKmts" target="_blank" rel="noreferrer">Authentication in MERN</a></li>
        <li><a href="https://www.youtube.com/watch?v=B-s72JrWcJM" target="_blank" rel="noreferrer">Deploying Fullstack Apps</a></li>
      </ul>
    </Container>
  );
}

export default Fullstack;
