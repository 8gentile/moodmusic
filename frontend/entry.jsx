import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root/component';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
