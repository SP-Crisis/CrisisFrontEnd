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
                        <li class={`nav-item  ${
                                    props.location.pathname === "/operations" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/operations">
                                    Operations
                                </Link>
                        </li>
                         <li class={`nav-item  ${
                                    props.location.pathname === "/forum" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/forum">
                                    Forum
                                </Link>
                        </li>
                        <li class={`nav-item  ${
                                    props.location.pathname === "/tech" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/tech">
                                    Technologies
                                </Link>
                        </li>
                        {/* <li class={`nav-item  ${
                                    props.location.pathname === "/profile" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/profile">
                                    Profile
                                </Link>
                        </li> */}
                        <li class={`nav-item  ${
                                    props.location.pathname === "/login" ? "active" : ""
                                    }`}
                                >
                                <Link class="nav-link" to="/login">
                                    Login
                                </Link>
                        </li>

                    </ul>
        </div>
        </div>

    );
 }

 export default withRouter(Sidebar);

