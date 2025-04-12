import React from 'react';
import { Container } from 'react-bootstrap';

function AppDev() {
  return (
    <Container className="my-4">
       <h2 style={{ textAlign: 'center', marginTop: '20px' }}>APP DEVELOPMENT ROADMAP</h2>

      <img
  src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740"
  alt="Backend"
  style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '20px auto' }}
/>
      <p>App Developers build native and cross-platform mobile apps using technologies like Android, Flutter, or React Native.</p>
      <p>🔍 What is App Development?
App development is the process of creating software applications that run on mobile devices (like smartphones or tablets), desktop platforms, or web browsers. Most commonly, people mean mobile app development for iOS and Android.</p>

<p>🧩 Types of Apps
1.Native Apps

Built specifically for one platform (iOS or Android).

Languages: Swift (iOS), Kotlin/Java (Android).

Best performance and access to device features.</p>

<p>2.Cross-Platform Apps

One codebase, multiple platforms.

Tools: React Native, Flutter, Xamarin.

Easier maintenance, faster dev time.</p>

<p>3.Web Apps

Accessed via a browser; responsive for mobile.

Built with HTML, CSS, JavaScript.

No app store install needed.</p>

<p>4.Hybrid Apps

Web apps inside a native shell.

Tools: Ionic, Cordova.

A mix of native and web technologies.</p>


<p style={{ fontWeight: 800 }}>Key Steps in App Development</p>



<p>1.Idea & Planning

Define purpose, target audience, features.

Research competitors and market demand.</p>

<p>2.UI/UX Design

Create wireframes and prototypes.

Focus on intuitive and engaging user experience.</p>

<p>3.Development

Frontend: The interface the user interacts with.

Backend: The server, database, and API logic.</p>

<p>4.Testing

QA ensures the app works correctly (unit, UI, and beta testing).</p>

<p>5.Deployment

Publish on App Store (iOS) or Google Play Store (Android).</p>

<p>6.Maintenance

Ongoing bug fixes, updates, and new features.</p>

<p style ={{fontWeight:800}}> .

🛠️ Common Tools & Languages</p>

<p>1.Frontend: Swift, Kotlin, Flutter (Dart), React Native (JavaScript)</p>
<p>2.Backend: Node.js, Django, Firebase, Ruby on Rails</p>
<p>3.Design: Figma, Adobe XD, Sketch</p>
<p>4.IDEs: Android Studio, Xcode, VS Code</p>

<p style ={{fontWeight:800}}>BELOW ARE THE YOUTUBE CLASSES LINKS ....GO CHECK IT OUT AND LEARN</p>

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
