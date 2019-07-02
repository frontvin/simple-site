import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Dashboard } from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={ Dashboard } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App