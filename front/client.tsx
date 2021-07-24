import React from 'react';
import { render } from 'react-dom';
import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('jwt')}`;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector('#app'),
);
