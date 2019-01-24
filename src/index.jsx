import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';
import { prepareSlowdown } from './slowdown';

const store = createStore(reducer, undefined, compose());

prepareSlowdown();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
