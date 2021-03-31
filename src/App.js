import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Sidebar, Policies, Forum, Operations, Tech, Profile, Login, ProtectedRoute} from "./components";

function App() {
  return (
    <div className="App">
      <div class ="grid-container">
      <Router>
          <div class="item2">
          <Sidebar />
          </div>
          <div class="item3">
           <Switch>
              <Route path="/login" exact component={() => <Login />} />  
              <ProtectedRoute path="/" exact component={() => <Home />} />
              <Route path="/login" exact component={() => <Login />} />  
              <ProtectedRoute path="/policies" exact component={() => <Policies />} />
              <ProtectedRoute path="/forum" exact component={() => <Forum />} />
              <ProtectedRoute path="/operations" exact component={() => <Operations />} />
              <ProtectedRoute path="/tech" exact component={() => <Tech />} />
              <ProtectedRoute path="/profile" exact component={() => <Profile />} />
            </Switch>
          </div>
        </Router>

      </div>

      
    </div>
  );
}

export default App;