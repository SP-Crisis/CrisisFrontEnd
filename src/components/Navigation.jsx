import React from 'react';
import {Link, withRouter} from "react-router-dom";

function Navigation(props){
    return(
        <div class="container-fluid">

        <div class="row align-items-center ">
            <nav class="navbar navbar-expand navbar-light topbar shadow">

                <form class="d-sm-inline-block form-inline navbar-search">
                    <div class="input-group">
                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"></input>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                            </button>
                        </div>

                    </div>
                </form>                            
            </nav>
        </div>
    </div>
    );
}

export default withRouter(Navigation);
        