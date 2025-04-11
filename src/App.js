import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './components/Home';

import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Fullstack from './pages/Fullstack';
import DataAnalyst from './pages/DataAnalyst';
import DataScientist from './pages/DataScientist';
import AppDev from './pages/AppDev';
import GameDev from './pages/GameDev';

import FrontendResources from './pages/FrontendResources';
import BackendResources from './pages/BackendResources';
import FullstackResources from './pages/FullstackResources';
import DataAnalystResources from './pages/DataAnalystResources';
import DataScientistResources from './pages/DataScientistResources';
import AppDevResources from './pages/AppDevResources';
import GameDevResources from './pages/GameDevResources';

import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Roadmap Pages */}
        <Route path="/frontend" element={<PrivateRoute><Frontend /></PrivateRoute>} />
        <Route path="/backend" element={<PrivateRoute><Backend /></PrivateRoute>} />
        <Route path="/fullstack" element={<PrivateRoute><Fullstack /></PrivateRoute>} />
        <Route path="/data-analyst" element={<PrivateRoute><DataAnalyst /></PrivateRoute>} />
        <Route path="/data-scientist" element={<PrivateRoute><DataScientist /></PrivateRoute>} />
        <Route path="/app-dev" element={<PrivateRoute><AppDev /></PrivateRoute>} />
        <Route path="/game-dev" element={<PrivateRoute><GameDev /></PrivateRoute>} />

        {/* Protected Resource Pages */}
        <Route path="/frontend/resources" element={<PrivateRoute><FrontendResources /></PrivateRoute>} />
        <Route path="/backend/resources" element={<PrivateRoute><BackendResources /></PrivateRoute>} />
        <Route path="/fullstack/resources" element={<PrivateRoute><FullstackResources /></PrivateRoute>} />
        <Route path="/data-analyst/resources" element={<PrivateRoute><DataAnalystResources /></PrivateRoute>} />
        <Route path="/data-scientist/resources" element={<PrivateRoute><DataScientistResources /></PrivateRoute>} />
        <Route path="/app-dev/resources" element={<PrivateRoute><AppDevResources /></PrivateRoute>} />
        <Route path="/game-dev/resources" element={<PrivateRoute><GameDevResources /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;






