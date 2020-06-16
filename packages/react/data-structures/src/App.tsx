import React, { useContext } from 'react';

import { DataProvider, FileContext } from "./DataProvider";

import './App.css';

function App() {

  const { data } = useContext(FileContext);

  return <DataProvider>
    {JSON.stringify(data)}
  </DataProvider>
}

export default App;
