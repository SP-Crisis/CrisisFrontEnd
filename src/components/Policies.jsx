import React from "react";
import Mask from "./Mask.png";
import Feet from "./Feet.png";
import Forum from "./Forum.png";
import {Link, withRouter} from "react-router-dom"

function Policies() {
  return (
    <div id="wrapper">
    <div class="container-fluid">
        <div class="d-sm-flex justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Policies</h1>
            <a href="#" class="">
            <Link to="/forum">
                      <img src={Forum} width="300px" height="235px"></img>
                    </Link>
            </a>
        </div>

      <div class="row">

        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row">
                    <div class="col ">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Wear Mask</div>
                      </div>
                      <div class="col">
                         <img src={Mask} width="65px" height="65px"></img>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-secondary shadow h-100 py-2">
              <div class="card-body">
                <div class="row ">
                  <div class="col ">
                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                        Social Distancing </div>
                    </div>
                    <div class="col">
                      <img src={Feet} width="75px" height="75px"></img>
                    </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      
      <div class="row">
      <div class="col-xl-4 col-lg-5">
        <div class="card">
        <div
                class="card-header align-items-center ">
                <h6 class="m-0 font-weight-bold text-primary">Reporting and Tracking</h6>
          </div>
          <div class="card-body">
                    <iframe src="https://www.columbusstate.edu/covid/self-report-tracking.php" width="740px" height="640px"></iframe>
                
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-5">
        <div class="card">
        <div
                class="card-header align-items-center ">
                <h6 class="m-0 font-weight-bold text-primary">State</h6>
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

export default Policies;