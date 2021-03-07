import React from 'react';
import {Link, withRouter} from "react-router-dom";

function Sidebar(props){
    return(
        <div id="wrapper">
        <div class="container-fluid">
             <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark">

                        <a class="sidebar-brand d-flex align-items-center " href="index.html">
                            
                            <div class="sidebar-brand-text mx-3"><sub>Crisis Managment System</sub></div>
                        </a>

                        <hr class="sidebar-divider my-0"></hr>

                        <li 
                            class={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/">
                                    CSU Dashboard
                                    <span class="sr-only">(current)</span>
                                </Link>
                        </li>
                         <li class={`nav-item  ${
                                    props.location.pathname === "/policies" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/policies">
                                    Policies
                                </Link>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <span>Operations</span></a>
                        </li>
                         <li class={`nav-item  ${
                                    props.location.pathname === "/forum" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/forum">
                                    Forum
                                </Link>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <span>Technologies</span></a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <span>Profile</span></a>
                        </li>

                    </ul>
        </div>
        </div>

    );
 }

 export default withRouter(Sidebar);

