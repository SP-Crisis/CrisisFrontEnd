import React from "react";
import { Button} from 'react-bootstrap';
import {Link, withRouter} from "react-router-dom";

function Login(){
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <form onsubmit="event.preventDefault()" class="box">
                        <h1>Login</h1>
                            <p class="text-muted"> Please enter your login and password!</p> 
                                <input type="text" name="" placeholder="Username"> </input>
                                <input type="password" name="" placeholder="Password"> </input>
                                     <a class="forgot text-muted" href="#">Forgot password?</a> 

                                <Button type="submit" name="" value="Login">
                                <Link to="/dashboard"></Link>
                                </Button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

} 
export default Login;