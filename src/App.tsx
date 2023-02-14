import React, { useEffect } from "react";

import "./App.css";
import { useApi } from "./hook/useApi";
import Layout from "./pages/Layout/Layout";

function App() {
  const { getApi } = useApi();

  useEffect(() => {
    getApi();
  }, [getApi]);

  return <Layout />;
}

export default App;
