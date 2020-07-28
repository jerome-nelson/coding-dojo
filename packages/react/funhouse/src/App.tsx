import React from 'react';
import Container from "@material-ui/core/Container";
import { Header } from "./Header";
import { CustomPaginationActionsTable } from "./TableData";

function App() {
  return (
    <Container>
      <Header />
      <CustomPaginationActionsTable />
    </Container>
  );
}

export default App;
