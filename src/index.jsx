import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';

const store = createStore(reducer, undefined, compose());

const el = document.createElement('div');
el.style.display = 'none';
el.id = 'log';
document.body.appendChild(el);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
