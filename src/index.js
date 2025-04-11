import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap global import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


