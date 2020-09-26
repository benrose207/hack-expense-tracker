import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/reset.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
