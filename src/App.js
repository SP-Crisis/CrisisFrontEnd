import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Sidebar, Policies, Forum, Operations } from "./components";

function App() {
  return (
    <div className="App">
      <div class ="grid-container">
      <Router>
          <div class="item1">
            <Navigation />
          </div>
          <div class="item2">
          <Sidebar />
          </div>
          <div class="item3">
           <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/policies" exact component={() => <Policies />} />
              <Route path="/forum" exact component={() => <Forum />} />
              <Route path="/operations" exact component={() => <Operations />} />
            </Switch>
          </div>
        </Router>

      </div>

      
    </div>
  );
}

export default App;