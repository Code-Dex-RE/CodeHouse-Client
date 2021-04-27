import React from 'react';
import { render } from 'react-dom';
import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';
import store from './stores/store';
import { Provider } from 'react-redux';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mock/server');
//   worker.start();
// }

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app'),
);
