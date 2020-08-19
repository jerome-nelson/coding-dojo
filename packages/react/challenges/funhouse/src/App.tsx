import React, { useEffect } from 'react';
import Container from "@material-ui/core/Container";
import { Header } from "./Header";
import { CustomPaginationActionsTable } from "./TableData";

import { useAPI } from "./hooks/getData";

interface ExpectedData {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

const App = () => {
  const [results, setResults] = useAPI<ExpectedData>("http://localhost:3002/customers/get/all");

  const filter = (comparison: string) => {
    setResults(results.data.filter(el => {
      return el.first_name.indexOf(comparison) > -1 || el.last_name.indexOf(comparison) > -1;
    }))
  }

  return (
    <Container>
      <Header onUpdate={filter} />
      {!!results.data.length && <CustomPaginationActionsTable results={results} />}
    </Container>
  );
}

export default App;
