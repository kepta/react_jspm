import React from 'react';
import { render } from 'react-dom';
import App from './App';
const node = document.createElement('div');

// Create a node to atach the react-dom
node.setAttribute('id', 'node');
document.body.appendChild(node);

// Render the App
render(
  <App/>,
  node
);
