import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// This creates a root element in the DOM using ReactDOM.createRoot with an id of "root" where the React application will be mounted. Then, the App component is rendered to the root.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


