import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { defaults } from 'react-sweet-state';

const logger = storeState => next => arg => {
  console.log(storeState.key, 'payload: ', arg);
  const result = next(arg);
  console.log(storeState.key, ':', storeState.getState());
  return result;
};

defaults.middlewares.add(logger);
defaults.batchUpdates = true;
defaults.devtools = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

