import React from 'react';
import ReactDOM from 'react-dom';
import { NodeUI } from "./node/node";

import { LinkedList } from './linkedlist/LinkedList';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LinkedList>
      <NodeUI value="head" isHead />
      <NodeUI value="test" />
    </LinkedList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
