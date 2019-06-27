import React from "react";
import {BrowserRouter, Route } from 'react-router-dom';

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

export const App = () => {

    return (
        <BrowserRouter>
            <div>
                 <Route exact path="/" component={ Dashboard } />
                 <Route exact path="/login" component={ Login } />
            </div>
        </BrowserRouter>
    )
};

