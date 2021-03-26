import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Sidebar, Policies, Forum, Operations, Tech, Profile, Login} from "./components";

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
              <Route path="/login" exact component={() => <Login />} />  
              <Route path="/" exact component={() => <Home />} />
              <Route path="/policies" exact component={() => <Policies />} />
              <Route path="/forum" exact component={() => <Forum />} />
              <Route path="/operations" exact component={() => <Operations />} />
              <Route path="/tech" exact component={() => <Tech />} />
              <Route path="/profile" exact component={() => <Profile />} />
            </Switch>
          </div>
        </Router>

      </div>

      
    </div>
  );
}

export default App;