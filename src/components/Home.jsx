import React from "react";
import Forum from "./Forum.png";
import {Link, withRouter} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div class="container">
          <div class="left">
            <iframe src="https://www.columbusstate.edu/covid/" width="700px" height="600px"></iframe>
          </div>
          <div class="right" >
              <Link to="/forum">
                <img src={Forum} width="500px" height="400px"></img>
              </Link>
          </div>
      </div>
         
    </div>
  );
}

export default Home;