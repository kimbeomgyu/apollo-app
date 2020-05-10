import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
      <style jsx>{`
        @import url(
          https://fonts.googleapis.com/css?family=Montserrat:400,
          700
        );
        @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
        body {
          background: #e2e2e2;
          width: 101%;
          height: 100vh;
        }
      `}</style>
    </Router>
  );
}

export default App;
