import React from "react";
import Forum from "./Images/Forum.png";
import TechSup from "./Images/TechSupport.png";
import Payment from "./Images/Payment.png";
import Network from "./Images/Network.png";
import Security from "./Images/Security.png";
import Software from "./Images/Software.png";
import WebServices from "./Images/WebServices.png";
import {Link} from "react-router-dom"
import { Button} from 'react-bootstrap';

function Tech(){
    return(
        <div id="wrapper">
             <div class="container-fluid">
             <div class="d-sm-flex justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Technology</h1>
                <a href="#" class="">
                    <Link to="/forum">
                         <img src={Forum} width="300px" height="235px"></img>
                    </Link>
                </a>
             </div>

             <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={TechSup} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/tech-support/" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={Payment} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/procurement/" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={Network} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/for-students/connecting-to-the-wifi/" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

             </div>

             <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={Security} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/information-security/" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={Software} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/services/enterprisesoftware.php" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                    <div class="card-body">
                        <img src={WebServices} width="283px" height="283px" ></img>
                
                    </div>
                        </div>
                <p></p>
                <Button variant="primary"  href="https://uits.columbusstate.edu/services/web-services.php" target="_blank" class="btn btn-primary btn-block">
                    Learn More
                </Button>

                </div>

             </div>

        </div>
        </div>      
    );
}
export default Tech;