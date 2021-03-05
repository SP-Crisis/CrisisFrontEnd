import React from "react";

function Policies() {
  return (
    <div className="policies">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Policies</h1>
              <a href="#" class="d-none d-sm-inline-block"><i
                class="fas fa-download fa-sm text-white-50"></i>
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

export default Policies;