import React from "react";
import Forum from "./Forum.png";
import {Link, withRouter} from "react-router-dom";

function Home() {
  return (
      <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <Link to="/forum">
                      <img src={Forum} width="300px" height="235px"></img>
                    </Link>
                </div>
              </div>
          </div>
        </div>

      <div class="row">
      <div class="col-xl-8 col-lg-7">
        <div class="card">
          <div
                class="card-header align-items-center ">
                <h6 class="m-0 font-weight-bold text-primary">COVID Response</h6>
          </div>
          <div class="card-body">
                    <iframe src="https://www.columbusstate.edu/covid/" width="700px" height="600px"></iframe>
                
          </div>
      </div>

      </div>

      <div class="col-xl-4 col-lg-5">
        <div class="card">
        <div
                class="card-header align-items-center ">
                <h6 class="m-0 font-weight-bold text-primary">COVID Chart</h6>
          </div>
          <div class="card-body">
                <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="430px" height="600px"></iframe>
             
          </div>
         </div>
      </div>
      
      </div>
      </div>
         
  );
}

export default Home;