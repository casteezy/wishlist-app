/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toolbox/lib/commons.scss';

import store from './app/store';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

