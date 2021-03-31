import React from "react";
import { Button} from 'react-bootstrap';
import {Link, withRouter} from "react-router-dom";

function Login(){
    return(
        <div id="wrapper">
            <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 col-lg-7 ">
                    <div class="card">
                       <form class="box">
                        <h1>Login</h1>
                            <p class="text-muted"> Please enter your login and password!</p> 
                            <div class="input-group">
                                <input type="text" class="form-control bg-light " placeholder="Email"></input>
                                <input type="password" class="form-control bg-light" placeholder="Password"></input>
                            </div>
                                     <Link to="/">
                                        <Button variant="primary" class="btn btn-primary">Login</Button> 
                                     </Link>
                        </form> 
                    </div>
                </div>
            </div>
            </div>
        </div>
    );

} 
export default Login;