import React, { Component } from "react";

import { Route, BrowserRouter} from 'react-router-dom';

import Login from "./components/Login/Login";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route exact path="/" component={ Dashboard } />
          <Route exact path="/login" component={ Login } />
        </BrowserRouter>
    )
  }
};

export default App;
