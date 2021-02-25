import React from 'react';
import {Link, withRouter} from "react-router-dom";

function Navigation(props){
    return(
        <div id="wrapper">
            <div id="content-wrapper" class="">
                <div id="content">
                <div class="row align-items-center my-5">
                    <nav class="navbar navbar-light bg-white topbar">

                         <form class="d-none d-sm-inline-block form-inline navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"></input>
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>                                 
                     </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navigation);
        