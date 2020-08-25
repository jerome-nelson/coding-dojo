import React from 'react';
import ReactDOM from 'react-dom';

import { GameBoard } from './components/gameBoard/gameBoard';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GameBoard size={5} />
  </React.StrictMode>,
  document.getElementById('root')
);
