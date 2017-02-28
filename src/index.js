import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import './index.css';

ReactDOM.render(
  <App txt={"I've passed this text as a prop"} />,
  document.getElementById('root')
);
