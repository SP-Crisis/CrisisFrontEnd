import React from "react";
import Forum from "./Images/Forum.png";
import {Link, withRouter} from "react-router-dom";

function Profile(){
    return(
        <div id="wrapper">
            <div class="container-fluid">
            <div class="d-sm-flex justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Profile</h1>
            <a href="#" class="">
            <Link to="/forum">
                      <img src={Forum} width="300px" height="235px"></img>
                    </Link>
            </a>
        </div>

            </div>
        </div>
    );
} 
export default Profile;