import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './globals.css';
import './styles.css'; // Import utility CSS

// Create a root element for React to render into
const container = document.getElementById('root');

if (!container) {
  throw new Error('Could not find root element with id "root"');
}

const root = createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
