import React from "react";
import Forum from "./Forum.png";
import {Link, withRouter} from "react-router-dom";

function Home() {
  return (
    <div id="wrapper">
      <div class="container-fluid">

        <div class="d-sm-flex justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="">
            <Link to="/forum">
                      <img src={Forum} width="300px" height="235px"></img>
                    </Link>
            </a>
        </div>


      <div class="row">
      <div class="col-xl-8 col-lg-7">
        <div class="card">
          <div
                class="card-header align-items-center ">
                <h6 class="m-0 font-weight-bold text-primary">COVID Response</h6>
          </div>
          <div class="card-body">
                    <iframe src="https://www.columbusstate.edu/covid/" width="740px" height="640px"></iframe>
                
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
                <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="440px" height="640px"></iframe>
             
          </div>
         </div>
      </div>
      
      </div>
      </div>
    </div>   
  );
}

export default Home;