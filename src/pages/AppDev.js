import React from 'react';
import { Container } from 'react-bootstrap';

function AppDev() {
  return (
    <Container className="my-4">
      <h2>App Development Roadmap</h2>
      <p>App Developers build native and cross-platform mobile apps using technologies like Android, Flutter, or React Native.</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=BBWyXo-3JGQ" target="_blank" rel="noreferrer">Android Development for Beginners</a></li>
        <li><a href="https://www.youtube.com/watch?v=VPvVD8t02U8" target="_blank" rel="noreferrer">Flutter Full Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noreferrer">React Native Crash Course</a></li>
        <li><a href="https://www.youtube.com/watch?v=Fnc_Jz5tC3I" target="_blank" rel="noreferrer">Publishing an App to Play Store</a></li>
      </ul>
    </Container>
  );
}

export default AppDev;
