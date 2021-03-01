import React from "react";

function Forum() {
  return (
    <div className="forum"> 
            <div class="main-body ">
              <div class="inner-wrapper">
              <div class="inner-sidebar">
                <div class="inner-sidebar-header justify-content-center"> 
                  <button class="btn btn-primary has-icon btn-block" type="button" data-toggle="modal" data-target="#threadModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus mr-2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    NEW DISCUSSION
                  </button>
                </div>
              
                <div class="inner-sidebar-body p-0">
                <div class="p-3 h-100" data-simplebar="init">
                <div class="simplebar-wrapper" style={{margin: "-16px"}}>
                <div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{right: "0px", bottom: "0px" }}>
                                <div class="simplebar-content-wrapper" style={{height: "100%"}}>
                                    <div class="simplebar-content" style={{padding: "16px"}}>
                                        <nav class="nav nav-pills nav-gap-y-1 flex-column">
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon active">All Threads</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Popular this week</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Popular all time</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Solved</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Unsolved</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">No replies yet</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style={{width: "234px", height: "292px" }}></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{width: "0px", display: "none"}}></div></div>
                    <div class="simplebar-track simplebar-vertical" style={{visibility: "visible"}}><div class="simplebar-scrollbar" style={{height: "151px", display: "block"}}></div></div>
                </div>
                </div>    
              </div>

              <div class="inner-main">
                <div class="inner-main-header">
                <a class="nav-link nav-icon rounded-circle nav-link-faded mr-3 d-md-none" href="#" data-toggle="inner-sidebar"><i class="material-icons">arrow_forward_ios</i></a>
                <select class="custom-select custom-select-sm w-auto mr-1">
                    <option selected="">Latest</option>
                    <option value="1">Popular</option>
                    <option value="3">Solved</option>
                    <option value="3">Unsolved</option>
                    <option value="3">No Replies Yet</option>
                </select>
                <span class="input-icon input-icon-sm ml-auto w-auto">
                    <input type="text" class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4" placeholder="Search forum" />
                </span>
                </div>
              </div>

              <div class="inner-main-body p-2 p-sm-3 collapse forum-content ">
                <div class="cardf mb-2">
                    <div class="card-bodyf p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"></a>
                            <div class="media-body">
                                <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Realtime fetching data</a></h6>
                                <p class="text-secondary">
                                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                                </p>
                                <p class="text-muted"><a href="javascript:void(0)">drewdan</a> replied <span class="text-secondary font-weight-bold">13 minutes ago</span></p>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
              </div>
            </div>


            <div class="modal fade" id="threadModal" tabindex="-1" role="dialog" aria-labelledby="threadModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form>
                    <div class="modal-header d-flex align-items-center bg-primary text-white">
                        <h6 class="modal-title mb-0" id="threadModalLabel">New Discussion</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="threadTitle">Title</label>
                            <input type="text" class="form-control" id="threadTitle" placeholder="Enter title" autofocus="" />
                        </div>
                        <textarea class="form-control summernote" style={{display: "none"}}></textarea>

                        <div class="custom-file form-control-sm mt-3" style={{width: "300px"}}>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Forum;