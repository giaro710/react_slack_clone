import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <h1>Welcome</h1>
            </Route>
            <Route path="/room/:roomId" exact>
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
