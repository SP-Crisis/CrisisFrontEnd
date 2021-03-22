import React from "react";
import Forum from "./Forum.png";
import Cafetime from "./CafeTime.png";
import Librarytime from "./LibraryTime.png";
import RecCentertime from "./RecCenterTime.png";
import {Link} from "react-router-dom"
import { Button} from 'react-bootstrap';

function Operations(){
    return(
        <div id="wrapper">
        <div class="container-fluid">
            <div class="d-sm-flex justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Operations</h1>
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
                        <h6 class="m-0 font-weight-bold text-primary">Dinning </h6>
                     </div>
                <div class="card-body">
                <img src={Cafetime} width="200px" height="235px"></img>
                
                </div>

                <Button variant="primary"  href="https://columbusstate.campusdish.com" target="_blank" class="btn btn-primary has-icon btn-block">
                    More Information
                </Button>
                </div>

             </div>

             <div class="col-xl-8 col-lg-7">
                <div class="card">
                    <div
                        class="card-header align-items-center ">
                        <h6 class="m-0 font-weight-bold text-primary">Library </h6>
                     </div>
                <div class="card-body">
                <img src={Librarytime} width="200px" height="235px"></img>
                
                </div>
                <Button variant="primary"  href="https://library.columbusstate.edu" target="_blank" class="btn btn-primary has-icon btn-block">
                    More Information
                </Button>
                </div>

             </div>

             <div class="col-xl-8 col-lg-7">
                <div class="card">
                    <div
                        class="card-header align-items-center ">
                        <h6 class="m-0 font-weight-bold text-primary">Rec Center </h6>
                     </div>
                <div class="card-body">
                <img src={RecCentertime} width="200px" height="235px"></img>
                
                </div>
                <Button variant="primary"  href="https://campusrec.columbusstate.edu" target="_blank" class="btn btn-primary has-icon btn-block" >
                    More Information
                </Button>
                </div>

             </div>

             </div>
        </div>
        </div>

    );
}

export default Operations;