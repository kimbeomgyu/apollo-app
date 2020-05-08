import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "reset-css";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
