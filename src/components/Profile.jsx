import React from "react";
import Forum from "./Images/Forum.png";
import {Link, withRouter} from "react-router-dom";

function Profile(){
    return(
        <div id="wrapper">
            <div class="container-fluid">

            <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card2">
                <div class="card-body2">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Student</p>

                      <a href="#" class="">
                        <Link to="/forum">
                            <img src={Forum} width="285px" height="235px"></img>
                        </Link>
                    </a>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>

            </div>
        </div>
    );
} 
export default Profile;