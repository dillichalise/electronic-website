import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route path="/" component={MainLayout} />
    </Switch>
  </Router>
);

export default App;
