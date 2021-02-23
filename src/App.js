import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Sidebar, Policies } from "./components";
import "./index.scss";

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <Sidebar />

        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/policies" exact component={() => <Policies />} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;