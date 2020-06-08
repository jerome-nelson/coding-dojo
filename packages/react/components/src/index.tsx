import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// TEST

function SampleComponent() {
  const [msg, updateMsg] = useState('test');

  setInterval(() => {
    updateMsg('show something different');
  }, 10000);
  return <p>
    <span>{msg}</span>
  </p>;
}

ReactDOM.render(
  <React.StrictMode>
    <SampleComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
