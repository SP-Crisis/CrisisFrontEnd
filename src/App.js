import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Sidebar, Policies } from "./components";

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <Sidebar />
        </Router>

        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/policies" exact component={() => <Policies />} />
        </Switch>
    </div>
  );
}

export default App;