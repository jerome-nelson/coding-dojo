import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { NodeUI } from './linkedlist/node';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NodeUI value="head" isHead />
    <NodeUI value="test"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
