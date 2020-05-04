import React from 'react';
import { Layout } from 'antd';

import { Nav } from "./Nav";
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header><Nav /></Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
