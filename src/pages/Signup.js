import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('User already exists.');
      return;
    }

    const updatedUsers = [...users, { email, password }];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setSuccess('Signup successful! Redirecting to login...');
    setError('');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4 text-center">Sign Up</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 mb-3">
          Sign Up
        </Button>

        <div className="text-center">
          Already have an account? <a href="/login">Login</a>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
