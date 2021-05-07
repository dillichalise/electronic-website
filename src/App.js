import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./Layout";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={MainLayout} />
    </Switch>
  </Router>
);

export default App;
