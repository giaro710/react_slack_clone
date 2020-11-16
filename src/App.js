import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/room/:roomId">
              <h1>Chat screen</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
